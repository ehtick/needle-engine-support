# ウェブサイトでのNeedle Engine

Needle Engineは新しいウェブアプリを作成するためにも、既存のウェブサイトに統合するためにも使用できます。どちらの場合でも、プロジェクトの配布フォルダをウェブホスターに**アップロード**して、世界中からアクセスできるようにする必要があります。

Needle Engineをウェブサイトに統合する方法はいくつかあります。最適な方法は、プロジェクトの複雑さ、カスタムスクリプトを使用しているかコアコンポーネントのみか、ターゲットウェブサイトに対してどれだけ制御権があるか、あなたとターゲットウェブサイト間の「信頼レベル」など、様々な要因によって異なります。

## 試してみる

Needleで作成したプロジェクトがあなたのウェブサイト上でどのように表示されるかをすぐに試したい場合は、テスト目的で以下の2行をページ内の任意の場所に追加してください。

::: code-tabs
@tab オプション1：Needleを埋め込む
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@needle-tools/engine/dist/needle-engine.min.js"></script>
<needle-engine src="https://cloud.needle.tools/-/assets/ZUBcksQ0gIz-latest-optimized/file"></needle-engine>
```
@tab オプション2：iframeを使用する
```html
<iframe src="https://engine.needle.tools/samples-uploads/musical-instrument/"
    allow="xr; xr-spatial-tracking; fullscreen;" width="100%" height="500px">
</iframe>
```
@tab 結果のウェブサイト
<iframe src="https://musicalinstrument-zubcksz1usd7h-z1usd7h.needle.run/"
    allow="xr; xr-spatial-tracking; fullscreen;" width="100%" height="500px" style="border:0; outline: 0;">
</iframe>
:::

# Needleでウェブアプリを作成する方法

Needle Engineをウェブサイトに導入する最も一般的なワークフローは以下の通りです。
1. [「Deploy to ...」コンポーネントを使用する](#using-the-deploy-to-...-components)
2. [ウェブアプリをフォルダにアップロードする](#uploading-your-web-app-to-a-folder)
3. [既存のウェブサイトにNeedleプロジェクトを埋め込む](#embedding-a-needle-project-into-an-existing-website)

## 「Deploy to ...」コンポーネントを使用する

Needle Engineの統合には、組み込みのデプロイオプションが付属しています。数回クリックするだけで、Needle Cloud、FTPサーバー、Glitch、Itch.io、GitHub Pagesなどへプロジェクトをデプロイできます。

これらの各オプションの詳細については、[Deployment](./deployment.md)セクションを参照してください。

1. UnityまたはBlenderのシーンに、使用したい「Deploy to ...」コンポーネントを追加します。
2. 必要なオプションを設定し、「Deploy」をクリックします。
3. これで完了です！プロジェクトが公開されました。

:::tip 推奨されるワークフロー
これは最も簡単なオプションであり、ほとんどのワークフローで推奨されます。非常に高速です！コンピューター上でプロジェクトの作業を繰り返し行い、数秒で新しいバージョンをウェブにアップロードできます。
:::

## ウェブアプリをフォルダにアップロードする

「Deploy to ...」コンポーネントを使いたくない場合や、特定のワークフローに適したコンポーネントがない場合は、手動で同じプロセスを行うことができます。結果として得られるウェブアプリは、プロジェクト作業中にローカルサーバーで見たものと同じになります。

1. ウェブプロジェクトのプロダクションビルドを作成します。これにより、配布に必要なすべてのファイルを含む`dist/`フォルダが作成されます。これには、JavaScriptバンドル、HTMLファイル、テクスチャ、オーディオ、ビデオなどの他のアセットを含む、必要なすべてのファイルが含まれています。

2. ウェブプロジェクトの`dist/`フォルダの内容をウェブホスターにアップロードします。これはFTP、SFTP、またはホスターが提供する他のファイル転送方法を介して行うことができます。詳細については、ウェブホスターのドキュメントを参照してください。

3. これで完了です！ウェブアプリが公開されました。


::: tip フォルダの場所はウェブアプリのURLに影響します。
ホスターの設定によって、フォルダの場所と名前がウェブアプリのURLを決定します。以下に例を示します。
- ドメイン `https://your-website.com/` は、ウェブスペース上の `/var/www/html` フォルダを指しています。
- ファイルを `/var/www/html/my-app` にアップロードし、`index.html` ファイルが `/var/www/html/my-app/index.html` に配置されます。
- ウェブアプリのURLは `https://your-website.com/my-app/` となります。
:::

## 既存のウェブサイトにNeedleプロジェクトを埋め込む

ブログ記事の一部、製品ページ、ポートフォリオなど、既存のウェブサイトの一部としてNeedle Engineプロジェクトを表示したい場合があります。このプロセスは非常に似ていますが、ファイルをウェブスペースのルートにアップロードするのではなく、数行のコードでプロジェクトを既存のウェブサイトに**埋め込み**ます。

1. ウェブプロジェクトのプロダクションビルドを作成します。これにより、配布に必要なすべてのファイルを含む`dist/`フォルダが作成されます。これには、JavaScriptバンドル、HTMLファイル、テクスチャ、オーディオ、ビデオなどの他のアセットを含む、必要なすべてのファイルが含まれています。

2. ウェブプロジェクトの`dist/`フォルダをウェブホスターにアップロードします。
    ::: tip フォルダはどこでもホストできます！
    ウェブホスターのファイルシステムにアクセスできない場合や、そこにファイルをアップロードする方法がない場合は、フォルダを他のウェブスペースにアップロードし、次のステップでその公開URLを使用できます。
    :::

3. `dist`フォルダ内に、`index.html`ファイルがあります。このフォルダからいくつかの行をコピーしたいので、テキストエディタでファイルを開きます。通常、次のようになります。
    ```html
    <head>
        ...
        <script type="module" crossorigin src="./assets/index-732f0764.js"></script>
        ...
    </head>
    <body>
        <needle-engine src="assets/scene.glb"></needle-engine>
    </body>
    ```

    ここには重要な2行があります。
    - `<script>`内のJavaScriptバンドル
    - `<needle-engine>` HTMLタグ

4. ターゲットウェブサイトで、`<script...>`タグと`<needle-engine...>`タグも追加します。パスがファイルをアップロードした場所を指していることを確認してください。
    ```html
    <script type="module" src="/your-upload-folder/assets/index-732f0764.js"></script>
    <needle-engine src="/your-upload-folder/assets/scene.glb"></needle-engine>
    ```

5. これで完了です！シーンがウェブサイトに表示されるはずです。

## iframeとしてNeedleプロジェクトを埋め込む

WordPressのようなCMSを使用しているなど、ウェブサイトへのアクセスが限られている場合は、iframeを使用してNeedle Engineシーンをウェブサイトに埋め込むことができます。YouTubeビデオやSketchfabモデルの埋め込みでこのワークフローをご存知かもしれません。

1. ウェブプロジェクトのプロダクションビルドを作成します。これにより、配布に必要なすべてのファイルを含む`dist/`フォルダが作成されます。

2. ウェブプロジェクトの`dist/`フォルダをウェブホスターにアップロードします。
    ::: tip フォルダはどこでもホストできます！
    ウェブホスターのファイルシステムにアクセスできない場合や、そこにファイルをアップロードする方法がない場合は、フォルダを他のウェブスペースにアップロードし、次のステップでその公開URLを使用できます。
    :::

3. `dist/`フォルダ内の`index.html`ファイルを指すように、ウェブサイトにiframeを追加します。
    ```html
    <iframe
        src="https://your-website.com/needle-files/dist/index.html"
        allow="xr; xr-spatial-tracking; fullscreen;">
    </iframe>
    ```


    ::: tip iframe内の権限
    `allow=`内のリストは、ウェブアプリが使用する機能によって異なります。例えば、XRアプリケーションはiframe内で動作するために`xr`と`xr-spatial-tracking`が必要です。

    他にも`camera; microphone; xr-spatial-tracking; accelerometer; gyroscope; display-capture; geolocation;`などの機能が必要になる場合があります。[MDNのiframe Permissions Policy directivesの全リスト](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives)を参照してください。
    :::

4. これで完了です！シーンがウェブサイトに表示されるはずです。

## カスタムスクリプトを使用しないシーンの埋め込み

プロジェクトがコアコンポーネントのみを使用し、カスタムスクリプトを使用しない場合は、CDN (コンテンツ配信ネットワーク) から直接Needle Engineを使用できます。

1. 例えばCMSの「HTMLブロック」として、以下のスニペットをウェブサイトに追加します。
    ```html
    <script type="module" src="https://cdn.jsdelivr.net/npm/@needle-tools/engine/dist/needle-engine.min.js"></script>
    <needle-engine src="https://cloud.needle.tools/api/v1/public/873a48a/10801b111/MusicalInstrument.glb" background-blurriness="0.8"></needle-engine>
    ```
2. ウェブプロジェクトの`assets/`フォルダをウェブホスターにアップロードします。プロジェクト設定によっては、このフォルダに1つ以上の`.glb`ファイルと、オーディオ、ビデオ、スカイボックスなどの他のファイルが含まれています。

3. 表示したい`.glb`ファイルのURLに、`needle-engine`タグの`src=`属性を変更します。通常、これは`https://your-website.com/assets/MyScene.glb`のようなパスになります。

4. これで完了です！シーンがウェブサイトに表示されるはずです。

## Needle Cloudウェブアプリをiframeとして埋め込む

プロジェクトをNeedle Cloudにデプロイした場合、iframeを使用して自身のウェブサイトに簡単に表示できます。

::: warning <b>工事中。</b> このセクションはまだ完成していません。
:::

# 一般的なワークフロー

## クライアントのウェブサイト向けウェブアプリの作成

1. **構築しているアプリの種類を理解し**、それが既存のウェブサイトに接続するか、どのように接続するかを理解します。
   多くの場合、クライアントのドメイン上のリンクからアクセスできるスタンドアロンアプリを構築します。
   しかし、他のサーバーサイドやクライアントサイドのコンポーネントが関与することもあります。

2. **ウェブアプリにアクセスできるURLを理解します。**
  これは次のいずれかになります。

    - **[Needle Cloud](./cloud/)** 上のページ
      `collaborativesandbox-zubcks1qdkhy.needle.run`

    - クライアントのウェブサイト上の**サブページ**
      `my-page.com/app`

    - 新しい**サブドメイン**
      `app.my-page.com`
    - 新規または既存の**ドメイン**
      `my-app.com`

    ::: tip ここに「良い」または「悪い」はありません。
    一般的なアプローチは、初期のプロトタイプ作成や開発中は[Needle Cloud](./cloud/)で開始し、最終バージョンではクライアントのウェブスペースとドメインに移行することです。

    選択は主に、ブランディング、SEO、技術的なセットアップに関するクライアントの要件に依存します。多くの場合、クライアントのIT部門またはウェブマスターとこれを話し合う必要があります。
    :::

1. **ウェブアプリがどのようにデプロイされ、維持管理されるかを理解します。**
    - クライアントのウェブサーバー上のフォルダにアクセスでき、最新バージョンをアップロードできるか、それともクライアントが自分でデプロイを管理したいか？
      ::: tip シンプルなアプローチ：FTPアクセス
      多くの場合、クライアントのウェブサーバー上のフォルダへのFTPまたはSFTPアクセスを求めることができます。URL、ユーザー名、パスワードが提供され、そのフォルダにファイルをアップロードできます。これを特に簡単にする「Deploy to FTP」コンポーネントを提供しています。クライアントのIT部門が、そのフォルダがどのURLからアクセス可能になるかをセットアップします。
        :::

    - 定期的に更新する必要のあるコンテンツが多いか、それともアプリはほとんど静的か？
        ::: tip 静的 vs. 動的コンテンツ
        ほとんど静的コンテンツの場合、時々新しいビルドをアップロードするだけで十分です。動的コンテンツの場合、CMS（コンテンツ管理システム）またはデータベース接続が必要になる場合があります。
        :::
    - ターゲットオーディエンスはどのデバイスやブラウザを使用していますか？
        ::: tip ブラウザ互換性とテスト
        Needle Engineはすべてのモダンなデバイスとブラウザで動作しますが、すべてが期待通りに動作することを確認するために、ターゲットオーディエンスが使用しているデバイスとブラウザでアプリをテストするのは常に良い考えです。例えば、電話用のARアプリを作成する場合、AndroidデバイスとiOSデバイスの両方でテストしたいでしょう。
        :::

2. **プロジェクト、テストデプロイ、およびクライアントデプロイをセットアップします。**
   デプロイプロセスを早期にテストして、それがどのように機能し、要件が何かを理解することは良いアイデアです。例えば、FTPを使用すると決めた場合、自身のウェブサーバーにテストフォルダをセットアップし、そこでデプロイプロセスをテストできます。クライアントから変更が承認されたら、クライアントのサーバーにデプロイできます。

3. **作成を開始します！**
   要件とデプロイが整ったら、プロジェクトの作成に進んでください！通常、ローカルで繰り返し作業し、承認のためにテストサーバーにデプロイし、その後クライアントのサーバーにデプロイします。

## Wordpress

1. Needle Engineプロジェクトを埋め込む方法を決定します。「既存のウェブサイトにNeedleプロジェクトを埋め込む」方法と、「iframeとしてNeedleプロジェクトを埋め込む」方法のどちらかを使用できます。

2. ウェブプロジェクトの`dist/`フォルダの内容をウェブホスターにアップロードします。通常、Wordpressのアップロードディレクトリは`wp-content/uploads/`にあります。

    ::: tip Wordpressバックアップ
    新しいプロジェクトを`wp-content/uploads/my-project/`に配置するか、または`my-projects/my-project`のような異なる場所に配置するかを決めることができます。これは、プロジェクトがWordpressのバックアップに含まれるかどうか、またどのように含まれるかに影響します。
    :::

3. Needle Engineを追加したいページで、`HTML`ブロックを追加し、上記の概要に沿って、スクリプト埋め込みまたはiframeとしてコードスニペットを貼り付けます。

## Shopify

::: warning <b>工事中。</b> 文書化が必要です。
:::

## Wix

::: warning <b>工事中。</b> 文書化が必要です。
:::

## Webflow

::: warning <b>工事中。</b> 文書化が必要です。
:::

---
このページはAIによって自動的に翻訳されました。