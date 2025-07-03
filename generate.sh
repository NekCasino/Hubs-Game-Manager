#!/bin/bash
set -e

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo -e "${BOLD}======================================================${NC}"
echo -e "${BOLD}${GREEN}Starting Proto Generation Process${NC}"
echo -e "${BOLD}======================================================${NC}"

# Create src directory if it doesn't exist
echo -e "${BLUE}Creating src directory if it doesn't exist...${NC}"
mkdir -p src
echo -e "${GREEN}Created directory: src${NC}"

# Find all proto files
echo -e "${BLUE}Searching for .proto files in proto directory...${NC}"
PROTO_FILES=$(find proto -name "*.proto")

if [ -z "$PROTO_FILES" ]; then
  echo -e "${RED}No proto files found in proto directory${NC}"
  exit 0
fi

# Count and display proto files
FILE_COUNT=$(echo "$PROTO_FILES" | wc -l)
echo -e "${GREEN}Found $FILE_COUNT .proto file(s):${NC}"
echo "$PROTO_FILES" | sed "s/^/${CYAN}   - ${NC}/"

echo -e "${BOLD}======================================================${NC}"
echo -e "${BOLD}${YELLOW}Generating gRPC-web TypeScript code...${NC}"
echo -e "${BOLD}======================================================${NC}"
echo -e "${MAGENTA}Command:${NC} protoc $PROTO_FILES --proto_path=proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:src"
protoc $PROTO_FILES --proto_path=proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:src
echo -e "${GREEN}Successfully generated gRPC-web TypeScript code${NC}"

echo -e "${BOLD}======================================================${NC}"
echo -e "${BOLD}${YELLOW}Generating JavaScript from proto files...${NC}"
echo -e "${BOLD}======================================================${NC}"
echo -e "${MAGENTA}Command:${NC} npx pbjs -t static-module -w commonjs -o src/proto.js $PROTO_FILES"
npx pbjs -t static-module -w commonjs -o src/proto.js $PROTO_FILES
echo -e "${GREEN}Successfully generated JavaScript file: src/proto.js${NC}"

echo -e "${BOLD}======================================================${NC}"
echo -e "${BOLD}${YELLOW}Generating TypeScript declarations...${NC}"
echo -e "${BOLD}======================================================${NC}"
echo -e "${MAGENTA}Command:${NC} npx pbts -o src/proto.d.ts src/proto.js"
npx pbts -o src/proto.d.ts src/proto.js
echo -e "${GREEN}Successfully generated TypeScript declarations: src/proto.d.ts${NC}"

# List generated files
echo -e "${BOLD}======================================================${NC}"
echo -e "${BOLD}${BLUE}Generated Files Summary:${NC}"
echo -e "${BOLD}======================================================${NC}"
TS_FILES=$(find src -name "*.ts" 2>/dev/null | wc -l)
JS_FILES=$(find src -name "*.js" 2>/dev/null | wc -l)
echo -e "${GREEN}Generated $TS_FILES TypeScript files and $JS_FILES JavaScript files${NC}"
echo -e "${BLUE}Files in src:${NC}"
ls -la src | grep -v "^total" | sed "s/^/${CYAN}   ${NC}/"

echo -e "${BOLD}======================================================${NC}"
echo -e "${BOLD}${GREEN}Proto Generation Completed Successfully!${NC}"
echo -e "${BOLD}======================================================${NC}"
