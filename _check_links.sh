#!/bin/bash
bundle install
bundle exec jekyll build --config _config.yml,_config_local.yml
bundle exec htmlproofer --external-only --timeframe "30d" --file-ignore "/includes/.*/"