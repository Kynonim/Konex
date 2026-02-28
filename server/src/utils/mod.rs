pub mod hash;

use std::env;
use sqlx::{PgPool, postgres::PgPoolOptions};

pub async fn koneksi(url: &str) -> PgPool {
  PgPoolOptions::new()
    .max_connections(10)
    .connect(url)
    .await.expect("Gagal terhubung ke database")
}

pub struct Config {
  pub database_url: String,
  pub jwt_secret: String,
  pub server_host: String,
  pub server_port: u16
}

impl Config {
  pub fn env() -> Self {
    Self {
      database_url: env::var("DATABASE_URL").expect("DATABASE_URL tidak ada di environment"),
      jwt_secret: env::var("JWT_SECRET").expect("JWT_SECRET tidak ada di environment"),
      server_host: env::var("SERVER_HOST").expect("SERVER_HOST tidak ada di environment"),
      server_port: env::var("SERVER_PORT").unwrap_or_else(|_| "8080".into()).parse().expect("SERVER_PORT tidak ada di environment")
    }
  }
}