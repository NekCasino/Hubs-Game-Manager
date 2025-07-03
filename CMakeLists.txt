cmake_minimum_required(VERSION 3.16)
project(gamehub-manager LANGUAGES C CXX)

find_package(Protobuf CONFIG REQUIRED)
find_package(gRPC CONFIG REQUIRED)
find_package(Threads)

set(PROTO_DIR ${CMAKE_CURRENT_SOURCE_DIR}/proto)

file(GLOB_RECURSE PROTO_FILES "${PROTO_DIR}/*.proto")

#
# Add Library target with protobuf sources
#
add_library(gamehub-manager ${PROTO_FILES})
target_link_libraries(gamehub-manager
        PUBLIC
        protobuf::libprotobuf
        gRPC::grpc
        gRPC::grpc++
)

set(PROTO_BINARY_DIR "${CMAKE_CURRENT_BINARY_DIR}/generated")

target_include_directories(gamehub-manager PUBLIC
        "$<BUILD_INTERFACE:${PROTO_BINARY_DIR}>"
        "$<BUILD_INTERFACE:${PROTO_BINARY_DIR}/gamehub-manager>"
)

set(PROTO_IMPORT_DIRS "${CMAKE_CURRENT_LIST_DIR}/proto")
set(PROTO_BINARY_DIR "${CMAKE_CURRENT_BINARY_DIR}/generated")

# Create output directories for protobuf files
file(MAKE_DIRECTORY "${PROTO_BINARY_DIR}")
file(MAKE_DIRECTORY "${PROTO_BINARY_DIR}/gamehub-manager")

#
# Compile protobuf and grpc files in gamehub-manager target to cpp
#
get_target_property(grpc_cpp_plugin_location gRPC::grpc_cpp_plugin LOCATION)
protobuf_generate(
        TARGET gamehub-manager
        LANGUAGE cpp
        IMPORT_DIRS ${PROTO_IMPORT_DIRS}
        PROTOC_OUT_DIR "${PROTO_BINARY_DIR}/gamehub-manager"
)
protobuf_generate(
        TARGET gamehub-manager
        LANGUAGE grpc
        GENERATE_EXTENSIONS .grpc.pb.h .grpc.pb.cc
        PLUGIN "protoc-gen-grpc=${grpc_cpp_plugin_location}"
        IMPORT_DIRS ${PROTO_IMPORT_DIRS}
        PROTOC_OUT_DIR "${PROTO_BINARY_DIR}/gamehub-manager"
)

