use actix_web::{HttpResponse, Responder, get, web};
use uuid::Uuid;
use crate::{apis::{ApiError, users::ApiUsers}, init::AppState};

#[get("/users/{id}")]
pub async fn get_user(state: web::Data<AppState>, path: web::Path<Uuid>) -> Result<impl Responder, ApiError> {
  let api = ApiUsers::new(&state.koneksi);
  let user = api.find_by_id(path.into_inner()).await?;
  Ok(HttpResponse::Ok().json(user))
}