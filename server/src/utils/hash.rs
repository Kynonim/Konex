use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier, password_hash::{SaltString, rand_core::OsRng}};
use crate::apis::ApiError;

pub fn hash_password(password: &str) -> Result<String, ApiError> {
  let salt = SaltString::generate(&mut OsRng);
  let argon = Argon2::default();
  let hashed = argon.hash_password(password.as_bytes(), &salt)
    .map_err(|e| ApiError::InternalMessage(e.to_string()))?
    .to_string();
  Ok(hashed)
}

pub fn verify_password(password: &str, hash_password: String) -> Result<bool, ApiError> {
  let hashed = PasswordHash::new(&hash_password).map_err(|e| ApiError::InternalMessage(e.to_string()))?;
  let verify = Argon2::default().verify_password(password.as_bytes(), &hashed).is_ok();
  Ok(verify)
}