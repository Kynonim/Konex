use sqlx::PgPool;
use uuid::Uuid;

use crate::{apis::ApiError, models::users::User};
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
}