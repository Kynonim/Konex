use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::prelude::FromRow;
use uuid::Uuid;

#[derive(Debug, Serialize, FromRow)]
pub struct User {
  pub id: Uuid,
  pub name: String,
  pub email: String,
  pub status: String,
  pub avatar_url: Option<String>,
  pub is_verified: bool,
  pub created_at: DateTime<Utc>,
  pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize, FromRow)]
pub struct SignupRequest {
  pub name: String,
  pub email: String,
  pub password: String
}

#[derive(Debug, Deserialize, FromRow)]
pub struct SigninRequest {
  pub email: String,
  pub password: String
}