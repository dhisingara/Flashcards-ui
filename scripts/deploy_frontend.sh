#!/bin/bash
npm run build
tar -zcvf build.tar.gz ./build/
scp -i "cli.pem" -r  ./build.tar.gz   ubuntu@ec2-16-170-215-166.eu-north-1.compute.amazonaws.com:~

branch="main"
>~/.ssh/known_hosts
ssh -i "cli.pem"  ubuntu@ec2-16-170-215-166.eu-north-1.compute.amazonaws.com -o "StrictHostKeyChecking no" -t "tar xvf build.tar.gz && cd hiring-jehu-amanna-flashcards-ui && git reset --hard && git fetch && git checkout $branch && git reset --hard @{u} &&  git pull && rm -rf ./build && mv ../build . &&  docker build -f Dockerfile.frontend -t frontend .  && docker stop frontend || true && docker container prune -f && docker run -d --restart unless-stopped --name frontend -p 8080:8080 -d frontend && docker system prune -f "
