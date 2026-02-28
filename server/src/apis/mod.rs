pub mod users;
pub mod routes;

use actix_web::{HttpResponse, ResponseError};

use crate::init::ApiResponse;

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

  #[error("Internal error")]
  InternalMessage(String),

  #[error("Data is already exists")]
  Conflict(String)
}

impl ResponseError for ApiError {
  fn error_response(&self) -> HttpResponse<actix_web::body::BoxBody> {
    match self {
      ApiError::Database(e) => HttpResponse::InternalServerError().json(res(e.to_string())),
      ApiError::NotFound => HttpResponse::NotFound().json(res("Not found".to_string())),
      ApiError::Unauthorized => HttpResponse::Unauthorized().json(res("Unauthorized".to_string())),
      ApiError::BadRequest(msg) => HttpResponse::BadRequest().json(res(msg.to_owned())),
      ApiError::Internal(_) => HttpResponse::InternalServerError().json(res("Internal server error".to_string())),
      ApiError::Conflict(msg) => HttpResponse::Conflict().json(res(msg.to_owned())),
      ApiError::InternalMessage(msg) => HttpResponse::InternalServerError().json(res(msg.to_owned()))
    }
  }
}

fn res(msg: String) -> ApiResponse<i16> {
  ApiResponse { status: false, message: msg, data: 0 }
}

pub enum MediaType {
  Text, Image, Video
}

impl MediaType {
  pub fn new(&self) -> &str {
    match self {
      MediaType::Text => "text",
      MediaType::Image => "image",
      MediaType::Video => "video"
    }
  }
}