<div align="center">

# 91paisa

</div>

### Setup

Install dependencies:

```bash
npm install
```

Start development Server:

```bash
npm start
```

### Deployment

> Note: before deploying on server remember to add the respective ssh keys

```bash
ssh-add 91-paisa-dashboard.pem
```

Deploy to [release-channel](https://betaboard.91paisa.com):

```bash
npm run deploy:release
```

Deploy to [production](https://dashbboard.91paisa.com):

```bash
npm run deploy:production
```
