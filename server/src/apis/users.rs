use sqlx::PgPool;
use uuid::Uuid;

use crate::{apis::ApiError, init::{hash::{hash_password, verify_password}, users::{SigninRequest, SignupRequest}}, models::users::User};

pub struct ApiUsers<'malas> {
  koneksi: &'malas PgPool
}

impl<'malas> ApiUsers<'malas> {
  pub fn new(koneksi: &'malas PgPool) -> Self {
    Self { koneksi }
  }

  pub async fn find_by_id(&self, id: Uuid) -> Result<User, ApiError> {
    let result = sqlx::query_as::<_, User>(r#"
      SELECT id, name, email, status, avatar_url, is_verified, created_at, updated_at
      FROM users
      WHERE id = $1
    "#)
      .bind(id)
      .fetch_one(self.koneksi)
      .await?;
    Ok(result)
  }

  pub async fn check_email(&self, email: &str) -> Result<bool, ApiError> {
    let result = sqlx::query_scalar("SELECT EXISTS(SELECT 1 FROM users WHERE LOWER(email) = LOWER($1))")
      .bind(email)
      .fetch_one(self.koneksi)
      .await?;
    Ok(result)
  }

  pub async fn create_user(&self, user: SignupRequest) -> Result<Uuid, ApiError> {
    let password_hashed = hash_password(&user.password)?;
    let result = sqlx::query_scalar(r#"
      INSERT INTO users (name, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id
    "#)
      .bind(user.name)
      .bind(user.email)
      .bind(password_hashed)
      .fetch_one(self.koneksi)
      .await?;
    Ok(result)
  }

  pub async fn create_token(&self, user: SigninRequest) -> Result<String, ApiError> {
    let result = sqlx::query_scalar("SELECT password_hash FROM users WHERE email = $1")
      .bind(user.email)
      .fetch_one(self.koneksi)
      .await?;
    if verify_password(&user.password, result)? {
      Ok("token login: 121212".to_string())
    } else {
      Err(ApiError::NotFound)
    }
  }
}