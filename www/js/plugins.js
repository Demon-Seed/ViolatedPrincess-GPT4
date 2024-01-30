// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins = [
  {
    name: "GraphicalDesignMode",
    status: true,
    description:
      "GUI画面デザインプラグイン\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）",
    parameters: {
      デザインモード: "false",
      自動保存: "false",
      モバイル版作成: "false",
      モバイル偽装: "false",
      ウィンドウ透過: "false",
      グリッドサイズ: "48",
      パディング: "0",
      フォントサイズ: "0",
      行の高さ: "0",
      背景透明度: "0",
      アイコンサイズ調整: "false",
      背景表示可否固定: "false",
      右クリックで消去: "false",
      メッセージウィンドウを無視: "false",
    },
  },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  { name: "便利機能", status: false, description: "", parameters: {} },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "Text2Frame",
    status: true,
    description:
      "テキストファイル(.txtファイルなど)から「文章の表示」イベントコマンドに簡単に変換するための、開発支援プラグインです。ツクールMV・MZの両方に対応しています。",
    parameters: {
      "Default Window Position": "下",
      "Default Background": "ウインドウ",
      "Default Scenario Folder": "text",
      "Default Scenario File": "message.txt",
      "Default Common Event ID": "1",
      "Default MapID": "1",
      "Default EventID": "12",
      "Default PageID": "1",
      IsOverwrite: "false",
      "Comment Out Char": "%",
      IsDebug: "false",
      DisplayMsg: "true",
      DisplayWarning: "true",
    },
  },
  {
    name: "MakeScreenCapture",
    status: true,
    description: "画面キャプチャ管理プラグイン",
    parameters: {
      PNGキャプチャキー: "F6",
      JPEGキャプチャキー: "F7",
      WEBPキャプチャキー: "F10",
      Ctrl同時押し: "false",
      Alt同時押し: "false",
      ファイル名: "image",
      出力場所: "captures",
      保存形式: "png",
      連番桁数: "2",
      タイムスタンプ: "true",
      署名: "",
      署名サイズ: "22",
      署名画像: "",
      実行間隔: "0",
      効果音: "",
      JPEG品質: "9",
    },
  },
  {
    name: "TitleImageChange",
    status: false,
    description: "タイトル画面変更プラグイン",
    parameters: {
      進行度変数: "11",
      優先度変数: "12",
      タイトル1の進行度: "1",
      タイトル1の画像: "Fountain",
      タイトル1のBGM: "Theme6",
      タイトル2の進行度: "2",
      タイトル2の画像: "タイトル",
      タイトル2のBGM: "Dungeon1",
      タイトル3の進行度: "3",
      タイトル3の画像: "",
      タイトル3のBGM: "",
      以降の進行度: "",
      以降の画像: "",
      以降のBGM: "",
    },
  },
  {
    name: "MPP_ChoiceEX",
    status: true,
    description: "【ver.3.11】選択肢の機能拡張",
    parameters: {
      maxPageRow: "6",
      "Disabled Index": "none",
      "=== Command ===": "",
      "Plugin Commands":
        '{"ChoicePos":"ChoicePos","ChoiceVariableId":"ChoiceVariableId","ChoiceRect":"ChoiceRect","ChoiceUnderMessage":"ChoiceUnderMessage"}',
      "Event Comment": '{"ChoiceHelp":"選択肢ヘルプ"}',
    },
  },
  {
    name: "TemplateEvent",
    status: true,
    description: "テンプレートイベントプラグイン",
    parameters: {
      TemplateMapId: "9",
      KeepEventId: "false",
      OverrideTarget:
        '{"Image":"true","Direction":"false","Move":"false","Priority":"false","Trigger":"false","Option":"false"}',
      AutoOverride: "false",
      IntegrateNote: "0",
    },
  },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  { name: "動作改善", status: false, description: "", parameters: {} },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "FixImageLoading",
    status: true,
    description: "画像ロード時のチラつき防止プラグイン",
    parameters: {},
  },
  {
    name: "dashBan",
    status: true,
    description: "ダッシュを禁止するプラグインです",
    parameters: {},
  },
  {
    name: "Evtrig_Custum",
    status: true,
    description: "イベント接触判定カスタマイズプラグイン",
    parameters: { t_ev_trig: "0" },
  },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  { name: "メッセージ関連", status: false, description: "", parameters: {} },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "YEP_CoreEngine",
    status: true,
    description:
      "v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.",
    parameters: {
      "---Screen---": "",
      "Screen Width": "1024",
      "Screen Height": "768",
      "Scale Battlebacks": "true",
      "Scale Title": "true",
      "Scale Game Over": "true",
      "Open Console": "false",
      "Reposition Battlers": "true",
      "GameFont Load Timer": "0",
      "Update Real Scale": "false",
      "Collection Clear": "true",
      "---Gold---": "",
      "Gold Max": "99999999",
      "Gold Font Size": "20",
      "Gold Icon": "0",
      "Gold Overlap": "A lotta",
      "---Items---": "",
      "Default Max": "99",
      "Quantity Text Size": "20",
      "---Parameters---": "",
      "Max Level": "99",
      "Actor MaxHP": "9999",
      "Actor MaxMP": "9999",
      "Actor Parameter": "999",
      "Enemy MaxHP": "999999",
      "Enemy MaxMP": "9999",
      "Enemy Parameter": "999",
      "---Battle---": "",
      "Animation Rate": "4",
      "Flash Target": "false",
      "Show Events Transition": "true",
      "Show Events Snapshot": "true",
      "---Map Optimization---": "",
      "Refresh Update HP": "true",
      "Refresh Update MP": "true",
      "Refresh Update TP": "false",
      "---Font---": "",
      "Chinese Font": "SimHei, Heiti TC, sans-serif",
      "Korean Font": "Dotum, AppleGothic, sans-serif",
      "Default Font": "GameFont, Verdana, Arial, Courier New",
      "Font Size": "24",
      "Text Align": "left",
      "---Windows---": "",
      "Digit Grouping": "true",
      "Line Height": "36",
      "Icon Width": "32",
      "Icon Height": "32",
      "Face Width": "144",
      "Face Height": "144",
      "Window Padding": "18",
      "Text Padding": "6",
      "Window Opacity": "192",
      "Gauge Outline": "true",
      "Gauge Height": "18",
      "Menu TP Bar": "true",
      "---Window Colors---": "",
      "Color: Normal": "0",
      "Color: System": "16",
      "Color: Crisis": "17",
      "Color: Death": "18",
      "Color: Gauge Back": "19",
      "Color: HP Gauge 1": "20",
      "Color: HP Gauge 2": "21",
      "Color: MP Gauge 1": "22",
      "Color: MP Gauge 2": "23",
      "Color: MP Cost": "23",
      "Color: Power Up": "24",
      "Color: Power Down": "25",
      "Color: TP Gauge 1": "28",
      "Color: TP Gauge 2": "29",
      "Color: TP Cost Color": "29",
    },
  },
  {
    name: "YEP_MessageCore",
    status: true,
    description: "v1.19 文章の表示方法や機能を変更できます。",
    parameters: {
      "---一般---": "",
      "Default Rows": "4",
      "Default Width": "Graphics.boxWidth -390",
      "Face Indent": "Window_Base._faceWidth + 24",
      "Fast Forward Key": "pagedown",
      "Enable Fast Forward": "true",
      "Word Wrapping": "false",
      "Description Wrap": "false",
      "Word Wrap Space": "false",
      "Tight Wrap": "false",
      "---フォント---": "",
      "Font Name": "GameFont",
      "Font Name CH": "SimHei, Heiti TC, sans-serif",
      "Font Name KR": "Dotum, AppleGothic, sans-serif",
      "Font Size": "22",
      "Font Size Change": "12",
      "Font Changed Max": "96",
      "Font Changed Min": "12",
      "Font Outline": "4",
      "Maintain Font": "false",
      "---名前ボックス---": "",
      "Name Box Buffer X": "0",
      "Name Box Buffer Y": "0",
      "Name Box Padding": "this.standardPadding() * 1",
      "Name Box Color": "0",
      "Name Box Clear": "false",
      "Name Box Added Text": "\\c[6]",
      "Name Box Auto Close": "true",
    },
  },
  {
    name: "MessageSkip",
    status: true,
    description: "メッセージスキッププラグイン",
    parameters: {
      スキップキー: "control",
      オートキー: "shift",
      スキップスイッチ: "0",
      オートスイッチ: "60",
      スキップアイコン: "0",
      オートアイコン: "74",
      アイコンX: "0",
      アイコンY: "0",
      押し続けスキップ: "true",
      オート待機フレーム: "\\V[527] + textSize * 10",
      終了解除スイッチID: "0",
      スキップピクチャ: "",
      スキップピクチャX: "500",
      スキップピクチャY: "0",
      オートピクチャ: "",
      オートピクチャX: "750",
      オートピクチャY: "0",
      スイッチピクチャ: "",
      スイッチピクチャトリガー: "0",
      スイッチピクチャX: "750",
      スイッチピクチャY: "0",
      ボタン原点: "0",
      ボタン表示スイッチID: "0",
      ピクチャ座標タイプ: "relative",
      無効化スイッチ: "0",
    },
  },
  {
    name: "PANDA_KeywordColor",
    status: true,
    description: "文章中で重要語句の文字色変更を簡略化できます。",
    parameters: {
      KeyList: '["N","E","P","I","S","K"]',
      ColorList: '["4","4","6","2","2","27"]',
    },
  },
  {
    name: "MessageWindowPopup",
    status: true,
    description: "フキダシウィンドウプラグイン",
    parameters: {
      フォントサイズ: "22",
      余白: "10",
      自動設定: "false",
      フェイス倍率: "75",
      ウィンドウ連携: "true",
      行間: "4",
      ウィンドウ透過: "false",
      フォントサイズ増減幅: "24",
      フォントサイズ上限: "96",
      フォントサイズ下限: "24",
      画面内に収める: "false",
      振動の速さ: "5",
      振動時間: "60",
      テールを使わない: "false",
      最小横幅取得変数ID: "0",
      最小高さ取得変数ID: "0",
      lowerLimitX: "0",
      upperLimitX: "0",
      lowerLimitY: "0",
      upperLimitY: "0",
      tailImage: "",
      tailImageAdjustY: "0",
    },
  },
  {
    name: "DarkPlasma_TextLog",
    status: true,
    description: "イベントのテキストログを表示する",
    parameters: {
      "Max View Count": "16",
      "Overflow Buzzer": "false",
      "Disable Logging Switch": "0",
      "Open Log Key": "pageup",
      "Disable Show Log Switch": "",
      "Show Log Window Without Text": "true",
      "Line Spacing": "0",
      "Message Spacing": "0",
      "Log Event Count": "0",
      "Log Event Message Count": "0",
      "Event Log Splitter":
        "-------------------------------------------------------",
      "Auto Event Split": "true",
      "Include Name In Log": "true",
      "Include Scroll Text In Log": "false",
      "Include Choice In Log": "true",
      "Choice Format": "選択肢:{choice}",
      "Choice Color": "17",
      "Include Choice Cancel In Log": "true",
      "Choice Cancel Text In Log": "キャンセル",
      "Smooth Back From Log": "true",
    },
  },
  {
    name: "CommonPopupCore",
    status: true,
    description:
      "ver1.05/汎用的なポップアップの仕組みを提供するためのベースプラグインです。",
    parameters: {
      "Text Back Color": "rgba(0,0,0,0,6)",
      "Text Back FileName": "popup_back%d",
    },
  },
  {
    name: "GetInformation",
    status: true,
    description:
      "ver1.15/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。",
    parameters: {
      "Info Disable Switch Id": "10",
      "Use Battle Info": "true",
      "Use Rewards Info": "true",
      "Info Pattern": "Normal",
      "Info Font Size": "20",
      "Info Count": "150",
      "Info Delay": "20",
      "Info MoveWait": "100",
      "Info MoveFade": "10",
      "Info Position": "Up",
      "Info Slide Action": "Down",
      "Info Sup X": "0",
      "Info Sup Y": "150",
      "Info Width": "1026",
      "Gold Icon Index": "314",
      "Actor Icon Start Index": "320",
      "Reward Popup Delay": "0",
      "Battle Show List": "item,gold,exp,skill,params,level,abp,classLevel",
      "Get Gold Text": "",
      "Lost Gold Text": "",
      "Get Item Text":
        "Obtained \\C[24]'\\I[_icon]_name'\\C[0]!\\n\\C[6]_desc1",
      "Lost Item Text":
        "Lost \\C[2]'\\I[_icon]_name'\\C[0]...\\n\\C[6]_desc1",
      "Get Item Text Num":
        "Obtained \\C[14]_num \\C[24]'\\I[_icon]_name'\\C[0]!\\n\\C[6]_desc1",
      "Lost Item Text Num":
        "Lost \\C[14]_num \\C[2]'\\I[_icon]_name'\\C[0]...\\n\\C[6]_desc1",
      "Get Skill Text": "",
      "Lost Skill Text": "",
      "Exp Up Text":
        "_actor gained \\C[14]_num \\C[0]points of \\C[4]_name\\C[0]!\\C[24]",
      "Exp Down Text":
        "_actor lost \\C[14]_num \\C[0]points of \\C[4]_name\\C[0]...\\C[2]",
      "Lv Up Text": "_actor's \\C[4]_name\\C[0] increased by \\C[14]_num\\C[24]!",
      "Lv Down Text":
        "_actor's \\C[4]_name\\C[0] decreased by \\C[14]_num \\C[2]points...\\C[0]",
      "Param Up Text":
        "_actor's \\C[4]_name\\C[0] increased by \\C[14]_num \\C[24]points!\\C[0]",
      "Param Down Text":
        "_actor's \\C[4]_name\\C[0] decreased by \\C[14]_num \\C[2]points...\\C[0]",
      "Abp Up Text":
        "_actor gained \\C[14]_num \\C[0]points of \\C[4]_name\\C[0]!\\C[24]",
      "Abp Down Text":
        "_actor lost \\C[14]_num \\C[0]points of \\C[4]_name\\C[0]...\\C[2]",
      "Class Lv Up Text":
        "_actor's \\C[4]_class's _name\\C[0] increased by \\C[14]_num \\C[24]points!\\C[0]",
      "Class Lv Down Text":
        "_actor's \\C[4]_class's _name\\C[0] decreased by \\C[14]_num \\C[2]points...\\C[0]",
      "Formation Lv Up Text":
        "The proficiency of \\C[4]_name\\C[0] increased by \\C[14]_num \\C[24]points!\\C[0]",
      "Formation Lv Max Text": "Mastered the \\C[4]_name\\C[0]!\\C[14]",
    },
  },
  {
    name: "PopupMessage",
    status: true,
    description:
      "ver1.02/メッセージの表示をポップアップに変更する制御文字_pum[delay,x,y,action]を追加します。",
    parameters: {
      "Pop Message FontSize": "20",
      "Pop Message Count": "180",
      "Popup Pattern": "Down",
    },
  },
  {
    name: "KMS_MapActiveMessage",
    status: true,
    description:
      "[v0.2.0] プレイヤーが近付いたときに、自動的にメッセージを表示するイベントを作成します。",
    parameters: {
      "Balloon offset Y": "20",
      "Balloon margin": "-8",
      "Default range": "50",
      "Display duration": "300",
      "Max message count": "10",
      "Message skin": "ActiveMessageSkin",
    },
  },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "アクションＲＰＧ関連",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "CharacterPopupDamage",
    status: true,
    description: "キャラクターのダメージポッププラグイン",
    parameters: {
      効果音演奏: "false",
      消音スイッチID: "0",
      X座標補正: "0",
      Y座標補正: "0",
      HP自動ポップアップ: "true",
      MP自動ポップアップ: "true",
      TP自動ポップアップ: "false",
      増加自動ポップアップ: "true",
      減少自動ポップアップ: "true",
      MPダメージ音: "",
      回転: "true",
      X方向半径: "40",
      Y方向半径: "40",
      回転速度: "60",
      拡大率: "100",
      拡大率変化値: "-10",
      最前面表示: "false",
    },
  },
  {
    name: "dsPassiveSkill",
    status: true,
    description: "パッシブスキルを実装するプラグイン ver1.12.0",
    parameters: { "Show Battle": "true", "Show Battle Switch ID": "0" },
  },
  {
    name: "MKR_MapItemSlot",
    status: true,
    description: "(v1.2.11) マップアイテムスロットプラグイン",
    parameters: {
      Slot_Number: "2",
      Slot_Set_Weapon: "false",
      Slot_Set_Armor: "false",
      Slot_Set_Skill: "false",
      Item_Count_Visible: "true",
      Mouse_Mode:
        '{"Use_Enable":"true","Select_Enable":"false","Display_Click":"0"}',
      Keyboard_Mode: '{"Use_Enable":"true","Select_Enable":"true"}',
      map_setting: "====================================",
      Slot_Visible: "false",
      Slot_Opacity_Offset: "16",
      Slot_Background: "",
      Slot_X: "center",
      Slot_Y: "top",
      Map_Slot_Window:
        '{"Size_Rate":"1.5","Padding":"12","Spacing":"0","Font_Size":"20"}',
      Slot_Add_Mode: "false",
      Item_Use_Mode: "false",
      Item_Remove_Mode: "true",
      Slot_Cursor_Visible: "true",
      Map_Slot_Opacity: "255",
      Event_Mode:
        '{"Slot_Enable":"true","Use_Enable":"false","Select_Enable":"false"}',
      Use_Buzzer: "true",
      key_config: "====================================",
      Item_Use_Key: '{"Key":"C"}',
      Slot_1_Key: '{"Key":"1"}',
      Slot_2_Key: '{"Key":"2"}',
      Slot_3_Key: '{"Key":"3"}',
      Slot_4_Key: '{"Key":"4"}',
      Slot_5_Key: '{"Key":"5"}',
      Slot_6_Key: '{"Key":"6"}',
      Slot_7_Key: '{"Key":"7"}',
      Slot_8_Key: '{"Key":"8"}',
      Slot_9_Key: '{"Key":"9"}',
      Slot_10_Key: '{"Key":"0"}',
      menu_setting: "====================================",
      Menu_Slot_Mode: "1",
      Menu_Background: "",
      Map_Background_Enable: "false",
      Menu_Slot_Window:
        '{"Size_Rate":"1.5","Padding":"12","Spacing":"0","Font_Size":"20"}',
      Menu_Slot_Name: "Slot",
      Slot_Set_Name: "Set",
      Slot_Remove_Name: "Remove",
      Slot_Set_Desc:
        '"Select the slot where you want to set an item, \\nthen select the item."',
      Slot_Remove_Desc:
        '"Select the slot you want to remove an item."',
      Menu_Slot_Opacity: "255",
      Category_Enable: "true",
      Item_Sort: '["item","weapon","armor","skill"]',
    },
  },
  {
    name: "MKR_PlayerSensor",
    status: true,
    description: "(v2.5.1) プレイヤー探索プラグイン",
    parameters: {
      探索設定: "====================================",
      Sensor_Switch: "D",
      Lost_Sensor_Switch: "",
      Both_Sensor: "ON",
      Terrain_Decision: "ON",
      Auto_Sensor: "true",
      Event_Decision: "OFF",
      Region_Decision: "[]",
      Real_Range_X: "0.000",
      Real_Range_Y: "0.000",
      視界設定: "====================================",
      Range_Visible: "ON",
      Range_Color: "red",
      Range_Opacity: "0",
      Range_Position: "1",
      Player_Found:
        '{"Ballon":"0","Se":"{\\"Name\\":\\"\\",\\"Volume\\":\\"90\\",\\"Pitch\\":\\"100\\",\\"Pan\\":\\"0\\"}","Common_Event":"0","Delay":"0"}',
      Player_Lost:
        '{"Ballon":"2","Se":"{\\"Name\\":\\"\\",\\"Volume\\":\\"90\\",\\"Pitch\\":\\"100\\",\\"Pan\\":\\"0\\"}","Common_Event":"0","Delay":"0"}',
      マップ設定: "====================================",
      Tracking_Priority: "false",
      Follower_Through: "false",
      Location_Reset: "true",
    },
  },
  {
    name: "TMMapHpGauge",
    status: true,
    description:
      "マップシーンに顔グラフィックとＨＰゲージを表示します。\n必要に応じてＭＰや変数などをゲージで表示することもできます。",
    parameters: {
      gaugeWindowX: "0",
      gaugeWindowY: "0",
      gaugeWindowWidth: "220",
      gaugeWindowHeight: "150",
      gaugeA:
        '{"type":"HP","x":"12","y":"7","width":"184","height":"36","fontSize":"18","param":"0","max":"0","name":"AP","color":"#ff60c0 #ffa0e0"}',
      gaugeB:
        '{"type":"MP","x":"12","y":"47","width":"184","height":"36","fontSize":"18","param":"0","max":"0","name":"AP","color":"#ff60c0 #ffa0e0"}',
      gaugeC:
        '{"type":"VN","x":"12","y":"87","width":"184","height":"36","fontSize":"18","param":"155","max":"156","name":"Desire","color":"#ff80ff #ff80ff"}',
      gaugeD:
        '{"type":"VN","x":"12","y":"87","width":"184","height":"36","fontSize":"18","param":"158","max":"160","name":"Posture","color":"#ff60c0 #ffa0e0"}',
      faceOffsetX: "-1000",
      faceOffsetY: "-4",
      stateIconMax: "4",
      stateIconX: "156",
      stateIconY: "24",
      stateIconScale: "100",
      stateIconOpacity: "255",
      goldWidth: "0",
      goldX: "12",
      goldY: "12",
      vnMax: "false",
      shakeTime: "0",
      startVisible: "false",
      windowOpacity: "0",
      collideOpacity: "128",
      messageBusyHide: "false",
      eventBusyHide: "false",
      useBattleScene: "false",
      gaugeWindowBattleX: "0",
      gaugeWindowBattleY: "0",
    },
  },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  { name: "セーブ関連", status: false, description: "", parameters: {} },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "Torigoya_SaveCommand",
    status: true,
    description: "プラグインコマンドからセーブを実行できるようにします。",
    parameters: {},
  },
  {
    name: "CustomizeMaxSaveFile",
    status: true,
    description: "最大セーブファイル数変更プラグイン",
    parameters: { セーブファイル数: "240" },
  },
  {
    name: "YKNR_SaveThumbnail",
    status: true,
    description:
      "セーブファイルにサムネイル用の画像を保存し、\nセーブ/ロード画面でファイル毎にサムネイルを表示する",
    parameters: {
      AutoSnapForThumbnail: "true",
      FastLoadingData: "true",
      SnapSettings: "",
      ThumbQuality: "90",
      ThumbSaveWidth: "122",
      ThumbSaveHeight: "94",
      ShowInSavefileList: "true",
      ThumbItemPosX: "rect.x + rect.width - width;",
      ThumbItemPosY: "rect.y + 5",
      ThumbItemScale: "1.00",
      OtherWindowClass: "",
      ThumbOWPosX: "rect.x + rect.width - width;",
      ThumbOWPosY: "rect.y + 5",
      ThumbOWScale: "1.00",
    },
  },
  {
    name: "Nore_AutoSave",
    status: true,
    description: "オートセーブと、セーブデータの保管をできるスクリプト",
    parameters: {
      maxPage: "11",
      maxCols: "3",
      lockKey: "shift",
      searchKey: "a",
      renameKey: "s",
      renameVar1: "31",
      renameVar2: "32",
      lockedPageWindowFile: "window2",
      autosaveJp: "Autosave",
      autosaveEn: "Autosave",
      autosaveCh: "オートセーブ",
      storageSaveJp: "Storage Save",
      storageSaveEn: "保管セーブ",
      storageSaveCh: "保管セーブ",
    },
  },
  {
    name: "InputForm",
    status: true,
    description: "フォーム作って文字入力（修正版）",
    parameters: {},
  },
  {
    name: "Nore_RecollectionSave",
    status: true,
    description: "回想セーブができるスクリプト",
    parameters: {
      recollectionPage: "9",
      maxCols: "5",
      alreadySaveExists: "Saved Data already exists",
      alreadySaveExistsEn:
        "Not recollection saved because there is already saved data.",
      alreadySaveExistsCh:
        "既にセーブデータがあるため回想セーブされませんでした",
      fullSaveFiles: "The maximum number of recollection saves has been reached",
      fullSaveFilesEn:
        "The maximum number of recollection saves has been reached",
      fullSaveFilesCh: "これ以上回想セーブを登録することができません",
      recosaveJp: "Reco%1",
      recosaveEn: "reco%1",
      recosaveCh: "回想%1",
      loadJp: "Load",
      loadEn: "load",
      loadCh: "ロードする",
      confirmloadJp: "Do you want to load this file?",
      confirmloadEn: "Do you want to load this file?",
      confirmloadCh: "このファイルをロードしますか？",
      deleteJp: "Delete",
      deleteEn: "delete",
      deleteCh: "削除する",
      copiedJp: "Copied File",
      copiedEn: "Copied file",
      copiedCh: "Copied file",
    },
  },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  { name: "システム関連", status: false, description: "", parameters: {} },
  {
    name: "---------------------",
    status: false,
    description: "",
    parameters: {},
  },
  {
    name: "LoadComSim",
    status: true,
    description: "ver1.00 メニューコマンドにロードを追加します。",
    parameters: { loadtext: "Load" },
  },
  {
    name: "MessageWindowHidden",
    status: true,
    description: "メッセージウィンドウ一時消去プラグイン",
    parameters: {
      triggerButton: '["右クリック"]',
      linkPictureNumbers: "[]",
      linkShowPictureNumbers: "[]",
      disableSwitchId: "0",
      disableInBattle: "false",
    },
  },
  {
    name: "PictureCallCommon",
    status: true,
    description: "ピクチャのボタン化プラグイン",
    parameters: {
      透明色を考慮: "true",
      ピクチャ番号の変数番号: "0",
      ポインタX座標の変数番号: "0",
      ポインタY座標の変数番号: "0",
      タッチ操作抑制: "false",
      戦闘中常にコモン実行: "false",
      並列処理として実行: "false",
      無効スイッチ: "0",
    },
  },
  {
    name: "PictureLoop",
    status: true,
    description: "ピクチャをランダム間隔で表示させます",
    parameters: { "Pictureloop Count1": "60", "Pictureloop Count2": "100" },
  },
  {
    name: "CustomizeConfigDefault",
    status: true,
    description: "オプションデフォルト値設定プラグイン",
    parameters: {
      常時ダッシュ: "OFF",
      コマンド記憶: "OFF",
      BGM音量: "20",
      BGS音量: "20",
      ME音量: "20",
      SE音量: "20",
      常時ダッシュ消去: "ON",
      コマンド記憶消去: "ON",
      BGM音量消去: "OFF",
      BGS音量消去: "OFF",
      ME音量消去: "OFF",
      SE音量消去: "OFF",
    },
  },
  {
    name: "DTextPicture",
    status: true,
    description: "動的文字列ピクチャ生成プラグイン",
    parameters: {
      itemIconSwitchId: "0",
      lineSpacingVariableId: "0",
      frameWindowSkin: "",
      frameWindowPadding: "18",
      padCharacter: "0",
    },
  },
  {
    name: "MKR_PlayerMoveForbid",
    status: true,
    description: "(v1.0.5) プレイヤー移動禁止プラグイン",
    parameters: {
      Default_Move_Flag: "13",
      Default_Menu_Flag: "false",
      "Enter Flag": "false",
    },
  },
  {
    name: "AdjustPictureGraphical",
    status: true,
    description:
      "ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）",
    parameters: { グリッドサイズ: "48", テストマップID: "-1" },
  },
  {
    name: "MKR_MapScrollFix",
    status: true,
    description: "(v1.1.0) マップスクロール固定プラグイン",
    parameters: {
      Default_Scroll_Fix_Sw: "33",
      Is_Display_Out: "true",
      Is_Display_In: "true",
      Scroll_Fix_Type: "0",
      Enable_MapZoom: "true",
    },
  },
  {
    name: "GeneralTrigger",
    status: true,
    description: "トリガープラグイン",
    parameters: {
      ニューゲーム: "0",
      コンティニュー: "0",
      オプション画面: "0",
      メニュー画面: "0",
      セーブ画面: "0",
      戦闘画面: "0",
      ショップ画面: "0",
      別マップ移動: "0",
      アイテム増減: "0",
      武器増減: "0",
      防具増減: "0",
      アイテムID: "0",
      アイテム個数: "0",
      メンバー加入: "0",
      メンバー離脱: "0",
      レベルアップ: "273",
      レベルダウン: "0",
      アクターID: "0",
      マップ画面でのみ有効: "OFF",
    },
  },
  {
    name: "VariableControlItem",
    status: true,
    description: "変数操作アイテムプラグイン",
    parameters: {},
  },
  {
    name: "DarkPlasma_SkipCommandPersonal",
    status: true,
    description: "キャラクター選択をスキップするプラグイン",
    parameters: {
      "Enable Only When Solo Party": "true",
      "Skip Select Item And Skill Target In Menu": "true",
      "Skip Select Item And SKill Target For Friend In Battle": "true",
    },
  },
  {
    name: "CommonInterceptor",
    status: true,
    description: "割り込みコモンイベントプラグイン",
    parameters: {
      ニューゲームコモン: "",
      ロードコモン: "801",
      メニューコモン: "332",
    },
  },
  {
    name: "MenuCommonEvent",
    status: true,
    description: "メニュー内コモンイベントプラグイン",
    parameters: {
      コモンイベント情報:
        '["{\\"SceneName\\":\\"Scene_Menu\\",\\"CommonEventId\\":\\"331\\"}"]',
      ピクチャ表示最大数: "100",
      実行位置を記憶: "false",
      タイマー有効化: "false",
      画像をウィンドウ背後に配置: "true",
      コマンド接頭辞: "",
    },
  },
  {
    name: "MenuSubCommand",
    status: true,
    description: "メニュー画面のサブコマンドプラグイン",
    parameters: {
      サブコマンド:
        '["{\\"CommandId\\":\\"0\\",\\"Name\\":\\"アイテム\\",\\"ParentName\\":\\"Secret Diary\\",\\"HiddenSwitchId\\":\\"0\\",\\"DisableSwitchId\\":\\"0\\",\\"Script\\":\\"$gameSwitches.setValue(603,true)\\",\\"ReturnMap\\":\\"true\\",\\"MapId\\":\\"0\\",\\"SelectMember\\":\\"false\\"}","{\\"CommandId\\":\\"0\\",\\"Name\\":\\"アイテム\\",\\"ParentName\\":\\"Help\\",\\"HiddenSwitchId\\":\\"0\\",\\"DisableSwitchId\\":\\"0\\",\\"Script\\":\\"$gameSwitches.setValue(55,true)\\",\\"ReturnMap\\":\\"true\\",\\"MapId\\":\\"0\\",\\"SelectMember\\":\\"false\\"}"]',
      コマンド追加位置: "0",
      サブメニュー横幅: "0",
      選択アクターID変数: "0",
      ウィンドウスキン: "",
      オプション消去: "false",
      ゲーム終了消去: "false",
      横並びサブメニュー: "false",
      サブメニュー逐次消去: "true",
      サブメニューX座標: "0",
      サブメニューY座標: "0",
      サブメニュー揃え: "",
      メニューピクチャ別管理: "false",
    },
  },
  {
    name: "PictureVariableSetting",
    status: true,
    description: "ピクチャ関連のイベント機能拡張プラグイン",
    parameters: { 初期値: "OFF", ピクチャ表示最大数: "200" },
  },
  {
    name: "BB_WindowSelector3",
    status: true,
    description: "ウインドウスキンと切り替えるプラグイン。",
    parameters: {
      "Variable ID": "11",
      "Window1 Opacity": "192",
      "Window2 Opacity": "192",
      "Window3 Opacity": "192",
      "Window1 OutlineColor": "rgba(0, 0, 0, 0.5)",
      "Window1 OutlineWidth": "4",
      "Window2 OutlineColor": "rgba(0, 0, 0, 0.5)",
      "Window2 OutlineWidth": "4",
      "Window3 OutlineColor": "rgba(0, 0, 0, 0.5)",
      "Window3 OutlineWidth": "4",
      "Window1 DimmerColor": "rgba(0, 0, 0, 0.6)",
      "Window1 DimGradationColor": "rgba(0, 0, 0, 0)",
      "Window2 DimmerColor": "rgba(0, 0, 0, 0.6)",
      "Window2 DimGradationColor": "rgba(0, 0, 0, 0)",
      "Window3 DimmerColor": "rgba(0, 0, 0, 0.6)",
      "Window3 DimGradationColor": "rgba(0, 0, 0, 0)",
    },
  },
  {
    name: "setItemMax",
    status: true,
    description: "アイテムの最大所持個数をアイテムIdごとに指定できます。",
    parameters: {},
  },
  {
    name: "MpiGetMapImage",
    status: true,
    description: "マップ全体を画像として出力します。",
    parameters: {
      GetImageTrigger1:
        "Input.isPressed('control') && Input.isTriggered('pageup')",
      GetImageTrigger2:
        "Input.isPressed('control') && Input.isTriggered('pagedown')",
      "Vertical Split": "1",
      "Horizontal Split": "1",
      OutputFolder: "output",
      TestModeOnly: "true",
    },
  },
  {
    name: "SentenceExtractor",
    status: false,
    description:
      "ツクールｍｖ内の文章と選択肢を全て出力し、csv形式で保存する。",
    parameters: {},
  },
  {
    name: "Nore_Plugins",
    status: true,
    description: "いろいろ気になったところ",
    parameters: {
      choiseLiseWindowMargin: "195",
      volumeOffset: "5",
      loadSkinScript: "1",
    },
  },
  {
    name: "Nore_ImageFont",
    status: true,
    description: "画像で文字を描画するよ",
    parameters: {
      numOffsetX: "0",
      numOffsetY: "0",
      width1: "12",
      width2: "8",
      textOffsetX: "0",
      textOffsetY: "4",
    },
  },
  {
    name: "Nore_FamilyTree2",
    status: true,
    description: "",
    parameters: { rightTreeOffset: "15" },
  },
  {
    name: "Nore_2xCharImage",
    status: true,
    description: "指定の画像を２倍拡大表示にします",
    parameters: {
      file1: "エネミーBOSS BT_黒スライム01-1",
      file2: "エネミーBOSS BT_黒スライム退場01-1",
      file3: "エネミーBOSS BT_黒スライム登場",
      file4: "",
      file5: "",
      file6: "",
      file7: "",
      file8: "",
      file9: "",
      file10: "",
      file11: "",
      file12: "",
      file13: "",
      file14: "",
      file15: "",
      file16: "",
      file17: "",
      file18: "",
      file19: "",
      file20: "",
    },
  },
  {
    name: "Nore_Mouse",
    status: true,
    description: "マウス操作を拡張します",
    parameters: {},
  },
  {
    name: "RecollectionMode",
    status: true,
    description: "回想モード機能を追加します。",
    parameters: {},
  },
  {
    name: "RecollectionMode_through_command_patch",
    status: true,
    description:
      "RecollectionModeのパッチです。タイトルから直接回想閲覧に遷移します",
    parameters: {},
  },
  {
    name: "Nore_RecollectionMode",
    status: true,
    description: "回想拡張プラグイン",
    parameters: { 回想スイッチ: "1997" },
  },
  {
    name: "Mano_InputConfig",
    status: true,
    description:
      "ゲームの操作に関する機能をまとめて管理します。\r\nユーザーによる拡張も支援します。",
    parameters: {
      color: '{"normal":"#880000","mandatory":"#22e488","move":"#22e488"}',
      basicOk:
        '{"name":"{\\"jp\\":\\"決定/攻撃\\",\\"en\\":\\"OK\\"}","keyText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}","helpText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}"}',
      basicCancel:
        '{"name":"{\\"jp\\":\\"キャンセル\\",\\"en\\":\\"cancel\\"}","keyText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}","helpText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}"}',
      basicShift:
        '{"name":"{\\"jp\\":\\"ダッシュ\\",\\"en\\":\\"dash\\"}","keyText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}","helpText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}"}',
      basicMenu:
        '{"name":"{\\"jp\\":\\"メニュー\\",\\"en\\":\\"menu\\"}","keyText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}","helpText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}"}',
      basicEscape:
        '{"name":"{\\"jp\\":\\"キャンセル/向き固定\\",\\"en\\":\\"menu/cancel\\"}","keyText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}","helpText":"{\\"jp\\":\\"\\\\\\"メニューを開くこともできます\\\\\\"\\",\\"en\\":\\"\\"}"}',
      basicPageup:
        '{"name":"{\\"jp\\":\\"バックログ\\",\\"en\\":\\"prev\\"}","keyText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}","helpText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}"}',
      basicPagedown:
        '{"name":"{\\"jp\\":\\"文章スキップ\\",\\"en\\":\\"next\\"}","keyText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}","helpText":"{\\"jp\\":\\"\\",\\"en\\":\\"\\"}"}',
      mapperDelete: '{"en":"delete","jp":"設定を消去"}',
      extendsMapper:
        '["{\\"keys\\":\\"\\",\\"keySetting\\":\\"{\\\\\\"keys\\\\\\":\\\\\\"c\\\\\\",\\\\\\"text\\\\\\":\\\\\\"{\\\\\\\\\\\\\\"jp\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"en\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}\\\\\\"}\\",\\"button\\":\\"7\\",\\"name\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"アイテム使用\\\\\\",\\\\\\"en\\\\\\":\\\\\\"item use\\\\\\"}\\",\\"helpText\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"\\\\\\",\\\\\\"en\\\\\\":\\\\\\"\\\\\\"}\\",\\"event\\":\\"{\\\\\\"id\\\\\\":\\\\\\"0\\\\\\",\\\\\\"inputType\\\\\\":\\\\\\"0\\\\\\"}\\",\\"touchButton\\":\\"\\",\\"adovanced\\":\\"{\\\\\\"symbol\\\\\\":\\\\\\"c\\\\\\",\\\\\\"overwrite\\\\\\":\\\\\\"0\\\\\\",\\\\\\"mandatory\\\\\\":\\\\\\"false\\\\\\"}\\",\\"enabled\\":\\"true\\"}","{\\"keys\\":\\"\\",\\"keySetting\\":\\"{\\\\\\"keys\\\\\\":\\\\\\"1\\\\\\",\\\\\\"text\\\\\\":\\\\\\"{\\\\\\\\\\\\\\"jp\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"en\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\"}\\\\\\"}\\",\\"button\\":\\"NaN\\",\\"name\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"スロット１選択\\\\\\",\\\\\\"en\\\\\\":\\\\\\"slot 1\\\\\\"}\\",\\"helpText\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"\\\\\\",\\\\\\"en\\\\\\":\\\\\\"\\\\\\"}\\",\\"event\\":\\"{\\\\\\"id\\\\\\":\\\\\\"0\\\\\\",\\\\\\"inputType\\\\\\":\\\\\\"0\\\\\\"}\\",\\"touchButton\\":\\"\\",\\"adovanced\\":\\"{\\\\\\"symbol\\\\\\":\\\\\\"1\\\\\\",\\\\\\"overwrite\\\\\\":\\\\\\"0\\\\\\",\\\\\\"mandatory\\\\\\":\\\\\\"false\\\\\\"}\\",\\"enabled\\":\\"true\\"}","{\\"keys\\":\\"\\",\\"keySetting\\":\\"{\\\\\\"keys\\\\\\":\\\\\\"2\\\\\\",\\\\\\"text\\\\\\":\\\\\\"{\\\\\\\\\\\\\\"jp\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"en\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\"}\\\\\\"}\\",\\"button\\":\\"NaN\\",\\"name\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"スロット２選択\\\\\\",\\\\\\"en\\\\\\":\\\\\\"slot 2\\\\\\"}\\",\\"helpText\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"\\\\\\",\\\\\\"en\\\\\\":\\\\\\"\\\\\\"}\\",\\"event\\":\\"{\\\\\\"id\\\\\\":\\\\\\"0\\\\\\",\\\\\\"inputType\\\\\\":\\\\\\"0\\\\\\"}\\",\\"touchButton\\":\\"\\",\\"adovanced\\":\\"{\\\\\\"symbol\\\\\\":\\\\\\"2\\\\\\",\\\\\\"overwrite\\\\\\":\\\\\\"0\\\\\\",\\\\\\"mandatory\\\\\\":\\\\\\"false\\\\\\"}\\",\\"enabled\\":\\"true\\"}","{\\"keys\\":\\"\\",\\"keySetting\\":\\"{\\\\\\"keys\\\\\\":\\\\\\"v\\\\\\",\\\\\\"text\\\\\\":\\\\\\"{\\\\\\\\\\\\\\"jp\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"v\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"en\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"v\\\\\\\\\\\\\\"}\\\\\\"}\\",\\"button\\":\\"NaN\\",\\"name\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"ホコグラ強制回復\\\\\\",\\\\\\"en\\\\\\":\\\\\\"\\\\\\"}\\",\\"helpText\\":\\"{\\\\\\"jp\\\\\\":\\\\\\"\\\\\\",\\\\\\"en\\\\\\":\\\\\\"\\\\\\"}\\",\\"event\\":\\"{\\\\\\"id\\\\\\":\\\\\\"829\\\\\\",\\\\\\"inputType\\\\\\":\\\\\\"0\\\\\\"}\\",\\"touchButton\\":\\"\\",\\"adovanced\\":\\"{\\\\\\"symbol\\\\\\":\\\\\\"v\\\\\\",\\\\\\"overwrite\\\\\\":\\\\\\"0\\\\\\",\\\\\\"mandatory\\\\\\":\\\\\\"false\\\\\\"}\\",\\"enabled\\":\\"true\\"}"]',
      eventList: "[]",
      GamepadIsNotConnectedText:
        '{"jp":"\\"ゲームパッドが接続されていません\\\\nボタンを押して再度試してください\\"","en":"\\"The gamepad is not connected.\\\\nPress the button and try again.\\""}',
      needButtonDetouchText:
        '{"jp":"\\"コンフィグを終了するために、\\\\nボタンから手を放してください。\\"","en":"\\"Release the button to exit the config.\\""}',
      apply:
        '{"width":"4","text":"{\\"jp\\":\\"設定を保存\\",\\"en\\":\\"save settings\\"}"}',
      rollback:
        '{"width":"4","text":"{\\"jp\\":\\"変更前に戻す\\",\\"en\\":\\"rollback\\"}"}',
      reset:
        '{"width":"4","text":"{\\"jp\\":\\"初期設定に戻す\\",\\"en\\":\\"reset\\"}"}',
      WASD: '{"width":"3","text":"{\\"jp\\":\\"WASD\\",\\"en\\":\\"WASD\\"}"}',
      style:
        '{"width":"3","text":"{\\"jp\\":\\"設定方法変更\\",\\"en\\":\\"Change setting style\\"}"}',
      changeLayout:
        '{"width":"3","text":"{\\"jp\\":\\"JIS/US\\",\\"en\\":\\"JIS/US\\"}"}',
      exit: '{"width":"3","text":"{\\"jp\\":\\"やめる\\",\\"en\\":\\"exit\\"}"}',
      gamepadConfigCommandText:
        '{"en":"gamepad config","jp":"Gamepad"}',
      keyConfigCommandText: '{"en":"keyboard config","jp":"Keyboard"}',
      gamepadBackground: "",
      keyBackground: "",
      SettingsForYEP_OptionsCore: '{"gamepad":"true","Keyboard":"true"}',
    },
  },
  {
    name: "GraphicsRenderFix",
    status: true,
    description: "放置していると画面がフリーズするのを修正",
    parameters: {},
  },
];
