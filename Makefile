# Makefile for Tailwind CSS Utilities Documentation Site

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make install      Install dependencies using bun"
	@echo "  make dev          Start the development server using bun"
	@echo "  make build        Build the static site for production using bun"
	@echo "  make preview      Preview the production build locally using bun"
	@echo "  make lint         Run ESLint for TypeScript files"
	@echo "  make format       Format TypeScript files using Prettier"
	@echo "  make clean-install Clean install of all dependencies"
	@echo "  --- Initial Setup (Run only once if needed) ---"
	@echo "  make init-vite    Initialize Vite project in current dir (Use with caution!)"
	@echo "  make init-tailwind Initialize Tailwind CSS config (Use with caution!)"
	@echo "  make init-shadcn   Initialize shadcn/ui (Use with caution!)"

# Install dependencies
.PHONY: install
install:
	bun install

# Start development server
.PHONY: dev
dev:
	bun run dev

# Build for production
.PHONY: build
build:
	bun run build

# Preview production build
.PHONY: preview
preview:
	bun run preview

# Lint code
.PHONY: lint
lint:
	bun run lint

# Format code
.PHONY: format
format:
	bun run format

# Clean install of dependencies
.PHONY: clean-install
clean-install:
	@echo "Cleaning node_modules and lock files..."
	rm -rf node_modules
	rm -f bun.lock
	@echo "Installing dependencies..."
	bun install

# --- Initial Setup Commands (Use with caution!) ---

# Initialize Vite project (Run only if starting from scratch in this directory)
.PHONY: init-vite
init-vite:
	@echo "WARNING: This will attempt to initialize Vite in the current directory."
	@echo "Ensure the directory is suitable or empty before proceeding."
	bun create vite@latest . --template react-ts

# Initialize Tailwind CSS (Run only if config files are missing)
.PHONY: init-tailwind
init-tailwind:
	@echo "WARNING: This will create/overwrite Tailwind CSS config files."
	bunx tailwindcss init -p

# Initialize shadcn/ui (Run only if not already initialized)
.PHONY: init-shadcn
init-shadcn:
	@echo "WARNING: This will initialize shadcn/ui and may overwrite existing configurations."
	@echo "Ensure tsconfig.json has baseUrl and paths configured."
	bunx shadcn@latest init

.PHONY: br-clean
br-clean:
	@git branch | grep -v "main" | xargs git branch -D
	@git fetch -p
	@git branch -r | grep -v "main" | grep -v "HEAD" | sed 's/origin\///' | xargs -I {} git push origin --delete {}