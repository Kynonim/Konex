use actix_web::{HttpResponse, Responder, get, post, web};
use uuid::Uuid;
use crate::{apis::{ApiError, users::ApiUsers}, init::{ApiResponse, AppState, users::SignupRequest}};

#[get("/users/{id}")]
pub async fn get_user(state: web::Data<AppState>, path: web::Path<String>) -> Result<impl Responder, ApiError> {
  let api = ApiUsers::new(&state.koneksi);
  if let Ok(id) = Uuid::parse_str(&path.into_inner()) {
    let user = api.find_by_id(id).await?;
    Ok(HttpResponse::Ok().json(ApiResponse {
      status: true,
      message: "exists".to_string(),
      data: user
    }))
  } else {
    Err(ApiError::NotFound)
  }
}

#[post("/users/signup")]
pub async fn signup(state: web::Data<AppState>, body: web::Json<SignupRequest>) -> Result<impl Responder, ApiError> {
  let req = body.into_inner();
  if req.name.trim().is_empty() || req.email.trim().is_empty() || req.password.len() < 8 {
    return Err(ApiError::Conflict("Data tidak lengkap atau password terlalu pendek".to_string()));
  }

  let api = ApiUsers::new(&state.koneksi);
  if api.check_email(&req.email).await? {
    return Err(ApiError::Conflict("Email sudah terdaftar".to_string()));
  }
  let result = api.create_user(req).await?;
  Ok(HttpResponse::Ok().json(ApiResponse {
    status: true,
    message: "Berhasil membuat akun".to_string(),
    data: result.to_string(),
  }))
}