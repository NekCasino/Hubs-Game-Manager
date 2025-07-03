#!/bin/bash

# Find all .proto files in the project
proto_files=$(find . -name "*.proto")

mkdir generated

# Loop through each .proto file and generate code
for proto_file in $proto_files; do
  protoc --grpc_out=./generated --cpp_out=./generated --plugin=protoc-gen-grpc=$(which grpc_cpp_plugin) "$proto_file"
done

echo "Code generation complete."
