pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repo'
                git branch: 'main', url: 'https://github.com/jrybarski/pipelineTask'
            }
        }

        stage('Install dependencies') {
            steps {
                echo 'Instaling npm depenencies'
                bat 'npm ci'
                bat 'npm install --save-dev eslint-config-prettier eslint-plugin-prettier'
            }
        }

        stage('Run Prettier and ESLint') {
            steps {
                echo 'Formating and linting code.'
                bat 'npx prettier --check . || exit 0'
                bat 'npx prettier --write .'
                bat 'npx eslint .'
            }
        }

        stage('Run UI Tests (WDIO & Cucumber)') {
            steps {
                echo 'Starting test E2E WebdriverIO featured by Cucumber'
                bat 'npm run test:ui'
            }
        }

        stage('Run API Tests (Newman)') {
            steps {
                echo 'Starting test API Postman/Newman...'
                bat 'npm run api-tests'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline success!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}