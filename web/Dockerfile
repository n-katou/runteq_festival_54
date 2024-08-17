# Node.jsの公式最新イメージを使用
FROM node:latest

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとyarn.lockをコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

# プロジェクトファイル全体をコピー
COPY . .

# ポートを公開
EXPOSE 4000

# Next.js開発サーバーを起動
CMD ["yarn", "dev", "-p", "4000"]