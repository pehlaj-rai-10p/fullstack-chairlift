#!/bin/sh

# Generate API Documentation
npm run npm:migrate

exec "$@"
