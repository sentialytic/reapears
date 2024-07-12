//! Server settings definitions

// ===== Paths ======

/// Web app index html file
pub const WEB_APP_ROOT: &str = concat!(env!("CARGO_MANIFEST_DIR"), "/webapp/dist/index.html");

/// Web app build directory
pub const WEB_APP_BUILD_DIR: &str = concat!(env!("CARGO_MANIFEST_DIR"), "/webapp/dist");

/// Server home directory
pub const HOME_DIR: &str = env!("CARGO_MANIFEST_DIR");

/// Server static files root directory
pub const STATIC_ROOT: &str = concat!(env!("CARGO_MANIFEST_DIR"), "/static");

/// Server media files root directory
pub const MEDIA_ROOT: &str = concat!(env!("CARGO_MANIFEST_DIR"), "/static/media");

/// Users profile photo uploads directory
pub const USER_UPLOAD_DIR: &str = concat!(env!("CARGO_MANIFEST_DIR"), "/static/media/uploads/user");

/// Farm logos uploads directory
pub const FARM_LOGO_UPLOAD_DIR: &str = concat!(
    env!("CARGO_MANIFEST_DIR"),
    "/static/media/uploads/farm_logo"
);

/// Cultivars image file uploads directory
pub const CULTIVAR_UPLOAD_DIR: &str =
    concat!(env!("CARGO_MANIFEST_DIR"), "/static/media/uploads/cultivar");

/// Harvests image file uploads directory
pub const HARVEST_UPLOAD_DIR: &str =
    concat!(env!("CARGO_MANIFEST_DIR"), "/static/media/uploads/harvest");
