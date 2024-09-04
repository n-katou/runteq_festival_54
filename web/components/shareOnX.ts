export const shareOnX = (url?: string) => {
  const currentUrl = url || window.location.href; // URLが渡されない場合は現在のページURLを取得
  const defaultText = "あつまれ！いちごの森\n\n"; // デフォルトのシェア文言 誰か考えてｗｗ

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultText)}${encodeURIComponent(currentUrl)}`;

  window.open(twitterUrl, '_blank'); // 新しいタブでシェアリンクを開く
};
