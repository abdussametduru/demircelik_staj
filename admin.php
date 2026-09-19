<?php
declare(strict_types=1);
session_start();

$dataFile = __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'news.json';
$adminUser = 'admin';
$adminPassword = 'admin123';

function readNews(string $file): array {
    if (!is_file($file)) return [];
    $items = json_decode(file_get_contents($file) ?: '[]', true);
    return is_array($items) ? $items : [];
}

function saveNews(string $file, array $items): void {
    file_put_contents($file, json_encode(array_values($items), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

$error = '';
if (!isset($_SESSION['admin']) && $_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    if ($_POST['username'] === $adminUser && $_POST['password'] === $adminPassword) {
        $_SESSION['admin'] = true;
        header('Location: admin.php');
        exit;
    }
    $error = 'Kullanıcı adı veya şifre hatalı.';
}

if (isset($_SESSION['admin']) && $_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save'])) {
    $items = readNews($dataFile);
    $items[] = [
        'id' => time(),
        'title' => trim($_POST['title'] ?? ''),
        'summary' => trim($_POST['summary'] ?? ''),
        'category' => trim($_POST['category'] ?? 'Duyuru'),
        'date' => date('Y-m-d')
    ];
    saveNews($dataFile, $items);
    header('Location: admin.php?saved=1');
    exit;
}

if (isset($_SESSION['admin']) && isset($_GET['delete'])) {
    $id = (int) $_GET['delete'];
    $items = array_filter(readNews($dataFile), fn(array $item): bool => (int)($item['id'] ?? 0) !== $id);
    saveNews($dataFile, $items);
    header('Location: admin.php');
    exit;
}
?>
<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Haber Yönetimi | Demir Çelik Enstitüsü</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="admin-page">
<?php if (!isset($_SESSION['admin'])): ?>
  <header class="head"><div class="wrap">
    <a class="brand" href="index.html"><span class="logo">DC<i>İ</i></span><span><strong>DEMİR ÇELİK</strong><small>ENSTİTÜSÜ</small></span></a>
    <a class="btn dark" href="index.html">Siteye dön ↗</a>
  </div></header>
  <main class="admin-login">
    <form class="form" method="post">
      <div class="eyebrow">YÖNETİM PANELİ</div>
      <h1>Haber ve duyuru yönetimi</h1>
      <?php if ($error): ?><p class="admin-error"><?= htmlspecialchars($error) ?></p><?php endif; ?>
      <label>Kullanıcı adı<input name="username" required></label>
      <label>Şifre<input type="password" name="password" required></label>
      <button class="btn rust" name="login">Giriş yap ↗</button>
      <p class="admin-hint">İlk giriş: admin / admin123</p>
    </form>
  </main>
<?php else: ?>
  <header class="head"><div class="wrap">
    <a class="brand" href="index.html"><span class="logo">DC<i>İ</i></span><span><strong>DEMİR ÇELİK</strong><small>ENSTİTÜSÜ</small></span></a>
    <nav class="nav admin-nav"><a href="index.html">Ana Sayfa</a><a href="news.html">Haberler</a><a class="contact-btn" href="admin.php?logout=1">Çıkış yap</a></nav>
  </div></header>
  <main class="admin-wrap">
    <div class="admin-head"><div><div class="eyebrow">YÖNETİM PANELİ</div><h1>Haberler ve duyurular</h1></div><a class="btn dark" href="admin.php?logout=1">Çıkış yap</a></div>
    <?php if (isset($_GET['saved'])): ?><p class="admin-success">İçerik kaydedildi.</p><?php endif; ?>
    <form class="form admin-form" method="post">
      <h2>Yeni içerik ekle</h2>
      <label>Başlık<input name="title" required></label>
      <label>Kategori<select name="category"><option>Haber</option><option>Duyuru</option></select></label>
      <label>Özet<textarea name="summary" rows="4" required></textarea></label>
      <button class="btn rust" name="save">Yayınla ↗</button>
    </form>
    <section class="admin-list"><h2>Yayınlanan içerikler</h2>
      <?php foreach (array_reverse(readNews($dataFile)) as $item): ?>
        <article><div><span><?= htmlspecialchars($item['category']) ?> · <?= htmlspecialchars($item['date']) ?></span><h3><?= htmlspecialchars($item['title']) ?></h3><p><?= htmlspecialchars($item['summary']) ?></p></div><a href="admin.php?delete=<?= (int)$item['id'] ?>" onclick="return confirm('Bu içerik silinsin mi?')">Sil</a></article>
      <?php endforeach; ?>
    </section>
  </main>
<?php endif; ?>
<footer class="footer"><div class="wrap"><span>Demir Çelik Enstitüsü Yönetim Paneli</span><a href="index.html">Ana siteye dön ↗</a><span>© 2026 KBU DÇE</span></div></footer>
</body>
</html>
