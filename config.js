/* ============================================================
   config.js — ARVAMOS FC テンプレート設定ファイル
   ★ このファイルを編集するだけで全ページが更新されます ★
============================================================ */

const CLUB = {

  /* ─────────────────────────────────────
   * クラブ基本情報
   * ───────────────────────────────────── */
  name:        'ARVAMOS FC',      // クラブ名（英語）
  nameJa:      'アルヴァモス FC',  // クラブ名（日本語）
  tagline:     'THE WILL TO WIN', // スローガン
  established:  2018,             // 創設年
  season:       2024,             // 現シーズン

  /* ─────────────────────────────────────
   * ブランドカラー
   * ここを変えるとサイト全体の色が切り替わります
   * ───────────────────────────────────── */
  colors: {
    primary:      '#CC0000',  // メインカラー（赤）
    primaryDark:  '#990000',  // 暗め
    primaryLight: '#FF2222',  // 明るめ（ホバー）
    black:        '#050505',
    dark:         '#0f0f0f',
    dark2:        '#181818',
    dark3:        '#242424',
  },

  /* ─────────────────────────────────────
   * ヒーロー設定
   *   type: 'video' → 動画ヒーロー
   *   type: 'image' → 静止画ヒーロー
   *   video が空文字の場合は image を使用
   * ───────────────────────────────────── */
  hero: {
    type:   'video',
    video:  '',  // 例: 'assets/hero.mp4'
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&q=85',
    image:  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&q=85',
    // ─ ポスターヒーロー設定 ─
    // 選手切り抜きPNG（透過推奨）。空の場合はグラデーションプレースホルダーを表示
    playerImage: '',
    // 左側に大きく表示するコピー文字（1行1要素）
    posterCopy: ['BE', 'YOUR', 'FIRE'],
  },

  /* ─────────────────────────────────────
   * SNS リンク
   * 空文字 '' にするとアイコンを非表示にします
   * ───────────────────────────────────── */
  sns: {
    x:         'https://x.com/',
    instagram: 'https://instagram.com/',
    youtube:   'https://youtube.com/',
    facebook:  'https://facebook.com/',
    tiktok:    '',
    line:      '',
  },

  /* ─────────────────────────────────────
   * 連絡先情報
   * ───────────────────────────────────── */
  contact: {
    postal:  '〒000-0000',
    address: '○○県○○市○○町 1-2-3',
    phone:   '000-0000-0000',
    email:   'info@arvamosfc.jp',
    // フォーム送信先（Formspree等）。空の場合は mailto: にフォールバック
    formAction: '',
  },

  /* ─────────────────────────────────────
   * 次戦情報
   * ───────────────────────────────────── */
  nextMatch: {
    date:        '2024-06-22T14:00:00',
    homeTeam:    'ARVAMOS FC',
    awayTeam:    'EAST UNITED FC',
    competition: 'リーグ第9節',
    venue:       '田園スタジアム',
    kickOff:     '14:00 KO',
    ticketUrl:   '#',
  },

  /* ─────────────────────────────────────
   * Match Planner 連携
   *   enabled: true にして embedUrl を設定すると
   *   指定URLのiframeが表示されます
   * ───────────────────────────────────── */
  matchPlanner: {
    enabled:  false,
    embedUrl: '',        // 例: 'https://your-planner.com/embed'
    height:   '600px',
  },

  /* ─────────────────────────────────────
   * ニュース
   * catClass: 'report' | 'transfer' | 'info'
   * ───────────────────────────────────── */
  news: [
    { id:1, date:'2024.06.15', cat:'MATCH REPORT', catClass:'report',
      title:'第8節 vs FC RIVALS 3-1勝利！チーム首位浮上',
      text:'圧倒的なホームの雰囲気の中、前半から主導権を握り快勝。首位に躍り出た。',
      img:'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=720&q=80', url:'#' },
    { id:2, date:'2024.06.10', cat:'TRANSFER', catClass:'transfer',
      title:'MF 田中 雄一 選手 加入のお知らせ',
      text:'攻撃的MFとして活躍してきた田中 雄一選手の加入が決定。即戦力として期待。',
      img:'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=720&q=80', url:'#' },
    { id:3, date:'2024.06.08', cat:'TRAINING', catClass:'info',
      title:'2024サマーキャンプ 参加者募集スタート',
      text:'プロ選手と共に汗を流すサマーキャンプを今夏も開催。小中高生対象、定員先着順。',
      img:'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=720&q=80', url:'#' },
    { id:4, date:'2024.06.01', cat:'CLUB', catClass:'info',
      title:'新規スポンサー契約締結のお知らせ',
      text:'地域を代表する企業様との新たなパートナーシップを締結しました。',
      img:'https://images.unsplash.com/photo-1546964124-0cce460e2c45?w=720&q=80', url:'#' },
    { id:5, date:'2024.05.28', cat:'MATCH REPORT', catClass:'report',
      title:'第7節 vs NORTH UNITED 2-2引き分け',
      text:'アウェーで2点差を追いつく粘り強い戦いを見せた。',
      img:'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=720&q=80', url:'#' },
  ],

  /* ─────────────────────────────────────
   * 試合日程
   * type: 'home' | 'away'
   * ───────────────────────────────────── */
  schedule: [
    { date:'22', month:'JUN', type:'home', comp:'リーグ第9節',    time:'14:00 KO', home:'ARVAMOS FC', away:'EAST UNITED FC', venue:'田園スタジアム', ticketUrl:'#' },
    { date:'29', month:'JUN', type:'away', comp:'リーグ第10節',   time:'13:00 KO', home:'FC SOUTH',   away:'ARVAMOS FC',     venue:'南市民競技場',   ticketUrl:'' },
    { date:'06', month:'JUL', type:'home', comp:'カップ戦準決勝', time:'18:00 KO', home:'ARVAMOS FC', away:'WEST CITY FC',   venue:'田園スタジアム', ticketUrl:'#' },
    { date:'13', month:'JUL', type:'away', comp:'リーグ第11節',   time:'15:00 KO', home:'NORTH FC',   away:'ARVAMOS FC',     venue:'北市総合運動場', ticketUrl:'' },
    { date:'20', month:'JUL', type:'home', comp:'リーグ第12節',   time:'16:00 KO', home:'ARVAMOS FC', away:'CENTRAL SC',     venue:'田園スタジアム', ticketUrl:'#' },
  ],

  /* ─────────────────────────────────────
   * 試合結果
   * result: 'W' | 'D' | 'L'
   * type: 'home' | 'away'
   * ───────────────────────────────────── */
  results: [
    { date:'2024.06.15', comp:'リーグ第8節',    home:'ARVAMOS FC',  away:'FC RIVALS',    hs:3, as:1, venue:'田園スタジアム', type:'home', result:'W' },
    { date:'2024.05.28', comp:'リーグ第7節',    home:'NORTH UNITED',away:'ARVAMOS FC',   hs:2, as:2, venue:'北市総合運動場', type:'away', result:'D' },
    { date:'2024.05.18', comp:'リーグ第6節',    home:'ARVAMOS FC',  away:'CENTRAL SC',   hs:2, as:0, venue:'田園スタジアム', type:'home', result:'W' },
    { date:'2024.05.11', comp:'カップ戦QF',     home:'ARVAMOS FC',  away:'SOUTH FC',     hs:1, as:0, venue:'田園スタジアム', type:'home', result:'W' },
    { date:'2024.05.04', comp:'リーグ第5節',    home:'EAST UNITED', away:'ARVAMOS FC',   hs:2, as:3, venue:'東部競技場',     type:'away', result:'W' },
    { date:'2024.04.27', comp:'リーグ第4節',    home:'ARVAMOS FC',  away:'WEST CITY FC', hs:0, as:1, venue:'田園スタジアム', type:'home', result:'L' },
    { date:'2024.04.20', comp:'リーグ第3節',    home:'COASTAL FC',  away:'ARVAMOS FC',   hs:1, as:2, venue:'沿岸スタジアム', type:'away', result:'W' },
    { date:'2024.04.13', comp:'リーグ第2節',    home:'ARVAMOS FC',  away:'FC RIVALS',    hs:1, as:1, venue:'田園スタジアム', type:'home', result:'D' },
    { date:'2024.04.06', comp:'リーグ第1節',    home:'NORTH FC',    away:'ARVAMOS FC',   hs:0, as:2, venue:'北市競技場',     type:'away', result:'W' },
  ],

  /* ─────────────────────────────────────
   * 選手データ
   * pos: 'GK' | 'DF' | 'MF' | 'FW'
   * foot: '右' | '左' | '両'
   * ───────────────────────────────────── */
  players: [
    { num:1,  pos:'GK', nameJa:'山田 大輝', nameEn:'DAIKI YAMADA',   birth:'1995.03.12', height:188, weight:82, foot:'右', from:'SOUTH UNITED FC', img:'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80', bio:'安定した守備範囲と正確なキックを武器に、ゴールを守る正GK。前クラブでは数多くのビッグセーブを記録した。' },
    { num:3,  pos:'DF', nameJa:'木村 大河', nameEn:'TAIGA KIMURA',   birth:'1997.07.22', height:183, weight:78, foot:'右', from:'NORTH FC',        img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', bio:'対人守備の強さとリーダーシップが魅力のセンターバック。空中戦の強さも大きな武器。' },
    { num:5,  pos:'DF', nameJa:'鈴木 健太', nameEn:'KENTA SUZUKI',   birth:'1996.11.05', height:180, weight:75, foot:'右', from:'EAST FC',         img:'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80', bio:'攻守兼備のサイドバック。精度の高いクロスと積極的なオーバーラップが武器。' },
    { num:6,  pos:'DF', nameJa:'高橋 涼',   nameEn:'RYO TAKAHASHI',  birth:'1998.02.14', height:177, weight:72, foot:'左', from:'WEST CITY FC',    img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', bio:'左足のプレースキックが魅力の左サイドバック。攻撃参加も積極的。' },
    { num:7,  pos:'MF', nameJa:'佐々木 勇', nameEn:'YU SASAKI',      birth:'1999.08.30', height:172, weight:68, foot:'右', from:'CENTRAL SC',      img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80', bio:'ボール奪取力と素早い攻守の切り替えが光るボランチ。チームのエンジン役。' },
    { num:8,  pos:'MF', nameJa:'田中 雄一', nameEn:'YUICHI TANAKA',  birth:'1997.05.20', height:175, weight:70, foot:'右', from:'NORTH UNITED',    img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80', bio:'広い視野と正確なパスが特長のトップ下。今季の新加入選手で即戦力として期待。' },
    { num:10, pos:'MF', nameJa:'中村 颯太', nameEn:'SOTA NAKAMURA',  birth:'1996.12.03', height:174, weight:69, foot:'左', from:'アカデミー出身',   img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', bio:'クラブアカデミー出身のキャプテン。創造性豊かなプレーメーカー。' },
    { num:9,  pos:'FW', nameJa:'佐藤 翔',   nameEn:'SHO SATO',       birth:'1998.04.07', height:178, weight:73, foot:'右', from:'FC SOUTH',        img:'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80', bio:'抜け出しのスピードと鋭いフィニッシュを持つエースストライカー。今季5ゴール。' },
    { num:11, pos:'FW', nameJa:'伊藤 快斗', nameEn:'KAITO ITO',      birth:'2001.09.15', height:170, weight:65, foot:'右', from:'アカデミー出身',   img:'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80', bio:'ドリブル突破が得意な若手アタッカー。昨季リーグ得点王の期待の星。' },
  ],

  /* ─────────────────────────────────────
   * スタッフデータ
   * ───────────────────────────────────── */
  staff: [
    { role:'MANAGER',      roleJa:'監督',              nameJa:'岡田 誠司', nameEn:'SEIJI OKADA',    img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80', bio:'指導歴20年のベテラン監督。前クラブで2度の優勝経験を持つ。堅守速攻を信条とする。' },
    { role:'HEAD COACH',   roleJa:'ヘッドコーチ',      nameJa:'山本 浩二', nameEn:'KOJI YAMAMOTO',  img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', bio:'攻撃的なスタイルの実装を担う戦術コーチ。欧州サッカーのメソッドを積極的に取り入れる。' },
    { role:'GK COACH',     roleJa:'GKコーチ',          nameJa:'中島 孝之', nameEn:'TAKAYUKI NAKAJIMA', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', bio:'元GKとして豊富な経験を持つ。ポジショニングとフィジカルトレーニングに定評がある。' },
    { role:'TRAINER',      roleJa:'フィジカルトレーナー', nameJa:'松田 健一', nameEn:'KENICHI MATSUDA', img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80', bio:'スポーツ医学の専門家。選手のコンディション管理とリハビリを担当する。' },
    { role:'ANALYST',      roleJa:'アナリスト',         nameJa:'斎藤 由希', nameEn:'YUKI SAITO',     img:'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80', bio:'データ分析の専門家として戦術立案をサポート。映像分析システムを駆使する。' },
    { role:'TEAM MANAGER', roleJa:'チームマネージャー', nameJa:'田村 美咲', nameEn:'MISAKI TAMURA',  img:'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80', bio:'選手・スタッフのスケジュール管理と渉外を担当。クラブ運営の要として活躍。' },
  ],

  /* ─────────────────────────────────────
   * スポンサー
   * logo: '' の場合は name テキストを表示
   * ───────────────────────────────────── */
  sponsors: {
    gold:     [ { name:'SPONSOR A', logo:'', url:'#' }, { name:'SPONSOR B', logo:'', url:'#' } ],
    silver:   [ { name:'SPONSOR C', logo:'', url:'#' }, { name:'SPONSOR D', logo:'', url:'#' }, { name:'SPONSOR E', logo:'', url:'#' } ],
    official: [ { name:'SPONSOR F', logo:'', url:'#' }, { name:'SPONSOR G', logo:'', url:'#' }, { name:'SPONSOR H', logo:'', url:'#' }, { name:'SPONSOR I', logo:'', url:'#' } ],
  },
};
