install:
	touch database/database.sqlite
	cp .env.example .env
	php artisan key:generate
	php artisan migrate
	php artisan db:seed

run:
	php artisan serve

