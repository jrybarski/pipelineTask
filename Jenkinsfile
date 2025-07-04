pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📦 Klonowanie repozytorium...'
                git branch: 'main', url: 'https://github.com/jrybarski/pipelineTask'
            }
        }

        stage('Install dependencies') {
            steps {
                echo '📥 Instalowanie zależności npm...'
                sh 'npm ci'
            }
        }

        stage('Run Prettier and ESLint') {
            steps {
                echo '🎨 Formatowanie i lintowanie kodu...'
                sh 'npx prettier --check .'
                sh 'npx eslint .'
            }
        }

        stage('Run UI Tests (WDIO)') {
            steps {
                echo '🧪 Uruchamianie testów E2E WebdriverIO...'
                sh 'npm run test:ui'
            }
        }

        stage('Run API Tests (Newman)') {
            steps {
                echo '📡 Uruchamianie testów API Postman/Newman...'
                sh 'npm run api:test'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline zakończony sukcesem!'
        }
        failure {
            echo '❌ Pipeline nie powiódł się!'
        }
    }
}