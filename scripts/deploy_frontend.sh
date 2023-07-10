#!/bin/bash
branch="main"
>~/.ssh/known_hosts
ssh -i "cli.pem"  ubuntu@ec2-16-170-215-166.eu-north-1.compute.amazonaws.com -o "StrictHostKeyChecking no" -t "cd hiring-jehu-amanna-flashcards-ui && git reset --hard && git fetch && git checkout $branch && git reset --hard @{u} &&  git pull && docker build -f Dockerfile.frontend -t frontend .  && docker stop frontend || true && docker container prune -f && docker run -d --restart unless-stopped --name frontend -p 8080:8080 -d frontend && docker system prune -f "
