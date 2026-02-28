pub mod apis;
pub mod models;
pub mod utils;

pub mod init {
  pub use crate::apis::routes;
  pub use crate::models::*;
  pub use crate::utils::*;
}

pub mod dbinit {
  use sqlx::{PgPool, migrate::MigrateDatabase};

  pub async fn migrate(database_url: &str, koneksi: &PgPool) -> anyhow::Result<()> {
    if !sqlx::Postgres::database_exists(database_url).await? {
      sqlx::Postgres::create_database(database_url).await?;
    }
    sqlx::migrate!("./migrations").run(koneksi).await?;
    Ok(())
  }
}