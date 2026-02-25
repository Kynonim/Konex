pub mod users;

use sqlx::PgPool;

#[derive(Clone)]
pub struct AppState {
  pub koneksi: PgPool
}