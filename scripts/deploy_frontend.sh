#!/bin/bash
branch="main"
>~/.ssh/known_hosts
ssh -i "cli.pem" ec2-user@ec2-16-171-10-49.eu-north-1.compute.amazonaws.com -o "StrictHostKeyChecking no" -t "cd hiring-jehu-amanna-flashcards-ui && git reset --hard && git fetch && git checkout $branch && git reset --hard @{u} &&  git pull && docker build -f Dockerfile.frontend -t frontend .  && docker stop frontend || true && docker container prune -f && docker run -d --restart unless-stopped --name frontend -p 4200:4200 -d frontend && docker system prune -f "
