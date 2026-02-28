pub mod users;

use serde::Serialize;
use sqlx::PgPool;

#[derive(Clone)]
pub struct AppState {
  pub koneksi: PgPool
}

#[derive(Debug, Serialize)]
pub struct ApiResponse<T> {
  pub status: bool,
  pub message: String,
  pub data: T
}