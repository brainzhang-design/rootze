#!/usr/bin/env bash
set -e

# Change to the directory where this script is located (project root)
cd "$(dirname "$0")"

PORT=${1:-8000}

# Check if port is already in use, increment if needed
while lsof -i :"$PORT" >/dev/null 2>&1; do
  echo "Port $PORT is currently in use, trying $((PORT + 1))..."
  PORT=$((PORT + 1))
done

URL="http://localhost:$PORT"

echo "========================================================"
echo "  ⚡ RootZe New Energy Landing Page — Local Preview"
echo "  🌐 URL: $URL"
echo "  🛑 Press Ctrl+C at any time to stop the server"
echo "========================================================"

# Auto-open browser in the background after a brief moment
(
  sleep 1
  if command -v open >/dev/null 2>&1; then
    open "$URL"
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$URL"
  fi
) &

# Start python3 http server
exec python3 -m http.server "$PORT"
