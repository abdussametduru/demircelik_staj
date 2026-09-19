<?php
declare(strict_types=1);

$file = __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'news.json';
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Sadece GET destekleniyor'], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!is_file($file)) {
    echo '[]';
    exit;
}

$content = file_get_contents($file);
$items = json_decode($content ?: '[]', true);
echo json_encode(is_array($items) ? $items : [], JSON_UNESCAPED_UNICODE);
