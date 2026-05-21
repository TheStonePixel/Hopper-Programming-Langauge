// hopper.hs — hcc build configuration
//
// This file will be executed by the hopper build driver once HopperScript exists.
// For now it serves as documentation of the intended build.

name:    "hcc"
version: "0.1.0"

build {
    entry:  "src/hcc.hop"
    output: "../../build/hcc"
}
