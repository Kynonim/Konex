use actix_cors::Cors;
use actix_web::{App, HttpServer, web};
use server::init::{AppState, Config, koneksi, routes::routes};
use tracing_subscriber::FmtSubscriber;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  dotenvy::dotenv().ok();
  let config = Config::env();
  let state = AppState { koneksi: koneksi(&config.database_url).await };

  let subscriber = FmtSubscriber::new();
  tracing::subscriber::set_global_default(subscriber).expect("Tracing Subscriber error");

  println!("Server running at http://{}:{}", &config.server_host, &config.server_port);

  HttpServer::new(move || {
    App::new()
      .wrap(Cors::default()
        .allow_any_header()
        .allow_any_method()
        .allow_any_origin()
      )
      .app_data(web::Data::new(state.clone()))
      .configure(routes)
  })
  .bind((config.server_host, config.server_port))?
  .run().await
}
