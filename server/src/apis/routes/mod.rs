pub mod users;

use actix_web::{HttpResponse, Responder, get, web};
use crate::apis::routes::users::get_user;

pub fn routes(cfg: &mut web::ServiceConfig) {
  cfg.service(
    web::scope("/api")
      .service(check_server)
      .service(
        web::scope("/auth")
          .service(get_user)
      )
  );
}

#[get("/check")]
pub async fn check_server() -> impl Responder {
  HttpResponse::Ok().body("Server running")
}