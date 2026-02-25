pub mod users;
pub mod routes;

use actix_web::{HttpResponse, ResponseError};

#[derive(Debug, thiserror::Error)]
pub enum ApiError {
  #[error("Database error")]
  Database(#[from] sqlx::Error),

  #[error("Resource not found")]
  NotFound,

  #[error("Unauthorized")]
  Unauthorized,

  #[error("Bad request: {0}")]
  BadRequest(String),

  #[error("Internal error")]
  Internal(#[from] anyhow::Error),
}

impl ResponseError for ApiError {
  fn error_response(&self) -> HttpResponse<actix_web::body::BoxBody> {
    match self {
      ApiError::Database(_) => HttpResponse::InternalServerError().json("Database error"),
      ApiError::NotFound => HttpResponse::NotFound().json("Not found"),
      ApiError::Unauthorized => HttpResponse::Unauthorized().json("Unauthorized"),
      ApiError::BadRequest(msg) => HttpResponse::BadRequest().json(msg),
      ApiError::Internal(_) => HttpResponse::InternalServerError().json("Internal server error")
    }
  }
}