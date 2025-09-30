# 技術スタック

## フレームワーク & ランタイム
- **Next.js 15.5.4** App Routerアーキテクチャ使用
- **React 19.1.0** TypeScriptサポート付き
- **Node.js** ランタイム環境

## ビルドシステム
- **Turbopack** 高速な開発とビルドのために有効化
- **TypeScript 5.x** strictモード有効
- **ESLint** Next.jsとTypeScript設定

## スタイリング
- **Tailwind CSS v4** ユーティリティファーストスタイリング
- **PostCSS** CSS処理用
- **Geistフォント** (SansとMono) Vercel製

## 開発コマンド
```bash
# Turbopack付き開発サーバー起動
npm run dev

# Turbopack付き本番ビルド
npm run build

# 本番サーバー起動
npm start

# リンティング実行
npm run lint
```

## 重要な設定
- TypeScriptパスマッピング: `@/*` はプロジェクトルートを指す
- ES2017ターゲットのstrictなTypeScript設定
- ESLint除外: node_modules, .next, out, buildディレクトリ
- HTMLのlang属性に日本語設定