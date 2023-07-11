This is a frontend of the Flashcard assignment. You can checkout the app live [here](http://ec2-16-170-215-166.eu-north-1.compute.amazonaws.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the application locally.

This application is build using nextjs 13. This has a different routing setup than the previous versions.

We are using Material UI to have faster prototype and stable components.

## Testing

We use playwright for end-to-end testing. Currently the test cases are not fully written. But a basic setup and tests are available to carry out the task further.

Test suites can be run as:

```bash
npm run test
```

## Deployment

The application can be deployed by running the following command.

```bash
./scripts/deploy_frontend
```

Currently the build is generated locally and copied to AWS ec2 instance. And then it is deployed via a docker image.

## Pending tasks

Due to the time constraints we are yet to setup the following.

- [ ] Strict Linting rules.
- [ ] Husky for commits hooks.
- [ ] Write detailed test cases. Both for component testing as well as e2e testing.
- [ ] Write detailed documentation of the component hierarcy and architecture.
- [ ] Refactor the code for better cognitive understanding
