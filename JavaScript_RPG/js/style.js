"use strict";

const CHRHEIGHT  = 9;                    //キャラの高さ
const CHRWIDTH   = 8;                    //キャラの幅
const FONT       = "12px monospace";     //使用フォント
const FONTSTYLE  = "#ffffff";            //文字色        
const HEIGHT     = 120;                  //仮想画面サイズ。高さ
const WIDTH      = 128;                  //仮想画面サイズ。幅
const INTERVAL   = 33;                   //フレーム呼び出し感覚
const MAP_WIDTH  = 32;                   //マップ幅
const MAP_HEIGHT = 32;                   //マップの高さ
const SCR_HEIGHT = 8;                    //画面タイルサイズの半分の高さ
const SCR_WIDTH  = 8;                    //画面タイルサイズの半分の幅
const SCROLL     = 1;                    //スクロール速度
const SMOOTH     = 0;                    //保管処理
const START_HP   = 20;                    //開始HP
const START_X    = 15;                   //開始位置X
const START_Y    = 17;                   //開始位置Y
const TILECOLUMN = 4;                    //タイル桁数
const TILEROW    = 4;                    //タイル行数
const TILESIZE   = 8;                    //タイルサイズ（ドット）
const WNDSTYLE  = "rgba(0,0,0,0.75)";   //ウィンドウの色

const gKey       = new Uint8Array( 0x100 );         //キー入力

let gAngle = 0;                                     //プレイヤーの向き  
let gEx = 0;
let gBossHP;                                        //ボスのHP
let gHP = START_HP;                                 //プレイヤーのHP
let gMHP= START_HP;                                 //プレイヤーの最大HP
let gLv = 1;                                        //プレイヤーのレベル   
let gCursor = 0;                                    //カーソル
let gEnemyHP;                                       //敵のHP
let gEnemyType = 0;                                 //敵の種類
let gFrame = 0;                                     //内部カウンター
let gWidth;                                         //実画面の幅
let gHeight;                                        //実画面の高さ
let gImgBoss;                                       //画像。ラスボス
let gImgMap;                                        //画像マップを確保
let gImgMonster;                                    //画像モンスターを確保
let gImgPlayer;                                     //キャラ画像を確保
let gItem = 0;                                      //所持アイテム
let gMessage1 = null;                               //表示メッセージ1
let gMessage2 = null;                               //表示メッセージ2
let gMoveX = 0;                                     //移動量X
let gMoveY = 0;                                     //移動量Y
let gOrder;                                         //行動順 
let gPhase = 0;                                     //戦闘フェーズ
let gPlayerX = START_X * TILESIZE + TILESIZE / 2;   //プレイヤー座標X
let gPlayerY = START_Y * TILESIZE + TILESIZE / 2 ;  //プレイヤー座標Y
let gScreen;       //仮想画面

const gFileBoss = "image/boss.png";
const gFileMap = "image/map.png";
const gFileMonster = "image/monster.png";
const gFilePlayer = "image/player.png";

const gEncounter = [0,0,0,1,0,0,2,3,0,0,0,0,0,0,0,0]; //的エンカウント確率

const gMonsterName = ["スライム","うさぎ","ナイト","ドラゴン","魔王"];  //モンスター名称

const	gMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 3, 6, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 3, 6, 6, 7, 7, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 6, 3, 0, 0, 0, 3, 3, 0, 6, 6, 6, 0, 0, 0,
    0, 0, 3, 3, 6, 6, 6, 7, 7, 2, 2, 2, 7, 7, 2, 2, 2, 7, 7, 6, 3, 3, 3, 6, 6, 3, 6,13, 6, 0, 0, 0,
    0, 3, 3,10,11, 3, 3, 6, 7, 7, 2, 2, 2, 2, 2, 2, 1, 1, 7, 6, 6, 6, 6, 6, 3, 0, 6, 6, 6, 0, 0, 0,
    0, 0, 3, 3, 3, 0, 3, 3, 3, 7, 7, 2, 2, 2, 2, 7, 7, 1, 1, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 7, 7, 7, 2, 7, 6, 3, 1, 3, 6, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 7, 2, 7, 6, 3, 1, 3, 3, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 0, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 3,12, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 7, 7, 6, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 6, 6, 6, 6, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6, 6, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 3, 3, 3, 6, 6, 6, 3, 3, 3, 1, 1, 1, 1, 1, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 8, 9, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 3, 3, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0,
    7,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7,
   ];


//戦闘行動処理
function Action(){

    gPhase++;                                                   //フェーズ経過

    if(((gPhase + gOrder) & 1) == 0){                           //敵の行動順の場合
        const d = GetDamage( gEnemyType +2);
        SetMessage(gMonsterName[gEnemyType] + "の攻撃！", d + "のダメージ");
        gHP -= d;                                               //プレイヤーのHP減少
        if(gHP <= 0){                                           //プレイヤーが死亡した場合
            gPhase = 7;                                         //死亡フェーズ
        }
        return;
    }


    //プレイヤー行動順
    if(gCursor == 0) {                                          //「戦う」選択時
        const d = GetDamage(gLv + 1);                            //ダメージ計算
        SetMessage("あなたの攻撃！", d + "のダメージ");   
        gEnemyHP -= d;
        if( gEnemyHP <= 0) {
            gPhase = 5;     
        }
        return;
    }

    if (Math.random() < 0.5){
        SetMessage("あなたは逃げ出した", null);
        gPhase = 6;
        return;
    }

    SetMessage("あなたは逃げ出した","しかし回り込まれてしまった！");


}


//経験値加算
function AddExp(){
    gEx += 1;                                                 //経験値加算
    while(gLv * (gLv + 1) * 2 <= gEx){                          //レベルアップ条件を満たしている場合
        gLv++;                                                  //レベルアップ   
        gMHP += 4 + Math.floor(Math.random() * 3);              //最大HP上昇4~6
    }
}

//敵出現処理
function AppearEnemy(t){
    gPhase = 1;                                                 //戦闘フェーズ
    gEnemyHP = t * 3 + 5;                                       //敵HP 
    gEnemyType = t;
    SetMessage("魔物が現れた！", null);
}

//戦闘コマンド
function CommandFight(){
    gPhase = 2;                                                 //戦闘コマンド選択フェーズ
    gCursor = 0;
    SetMessage("　　　　戦う", "　　　　逃げる");
}

// 戦闘画面描画処理
function DrawFight(g) {
    g.fillStyle = "#000000";                                    //背景色
    g.fillRect(0,0,WIDTH,HEIGHT);                               //画面全体を描画

    if(gPhase <= 5){
        if(IsBoss()){
            g.drawImage(gImgBoss, WIDTH / 2 - gImgBoss.width / 2, HEIGHT / 2 - gImgBoss.height / 2);        
        } else {
            let w = gImgMonster.width /4;
            let h = gImgMonster.height;
            g.drawImage(gImgMonster, gEnemyType * w, 0, w, h, Math.floor(WIDTH / 2 - w / 2), Math.floor(HEIGHT / 2 - h / 2), w ,h);
           
        }
        
    }
    
    DrawMessage(g);                                             //メッセージ描画
    DrawStates(g);                                              //ステータス描画

    if(gPhase == 2) {
        g.fillText("➡︎", 6, 96 + 14 * gCursor );                 //カーソル描画
    }
    

}
   
//フィールド描画処理
function DrawField(g){
    let mx = Math.floor(gPlayerX / TILESIZE);                   //プレイヤーのタイル座標X
    let my = Math.floor(gPlayerY / TILESIZE);                   //プレイヤーのタイル座標Y

    for( let dy = -SCR_HEIGHT; dy <= SCR_HEIGHT; dy++ ){
        let ty = my + dy;                                       //タイル座標Y
        let py = (ty + MAP_HEIGHT) % MAP_HEIGHT;                //ループ後タイル座標Y

		for( let dx = -SCR_WIDTH; dx <= SCR_WIDTH; dx++ ){
            let tx = mx + dx;                                   //タイル座標X
            let px = (mx + dx + MAP_WIDTH ) % MAP_WIDTH;        //ループ後タイル座標X
            DrawTile(g,
                    tx * TILESIZE + WIDTH  / 2 - gPlayerX, 
                    ty * TILESIZE + HEIGHT / 2 - gPlayerY,
                    gMap[ py * MAP_WIDTH + px]);
		}
    }

    // プレイヤー描画
    g.drawImage(gImgPlayer, 
                (gFrame >> 4 & 1) * CHRWIDTH, gAngle * CHRHEIGHT, CHRWIDTH,CHRHEIGHT,
                WIDTH / 2 - CHRWIDTH / 2, HEIGHT / 2 - CHRHEIGHT + TILESIZE / 2, CHRWIDTH, CHRHEIGHT );
    
    g.fillStyle = WNDSTYLE;
    g.fillRect(2,2,44,37);

    DrawMessage(g);                       //メッセージ描画
    DrawStates(g);                        //ステータス描画

}


function DrawMain() {
    const g = TUG.GR.mG;                  //仮想画面の2D描画コンテキストを取得

    if(gPhase <= 1) {
        DrawField(g);                     //フィールド画面
    } else {
        DrawFight(g);
    }

    // g.fillStyle = WINDSTYLE;         //ウィンドウの色
    // g.fillRect (20,3,105,15)         //雛形描画

    // g.font = FONT;                  //文字フォントを設定
    // g.fillStyle = FONTSTYLE;        //文字色
    // g.fillText("x=" + gPlayerX + "y=" + gPlayerY + "m=" + gMap[my * MAP_WIDTH + mx] , 25, 15);
}

// メッセージ描画
function DrawMessage(g) {

    if(!gMessage1) {
        return;
    }

    g.fillStyle = WNDSTYLE;            //ウィンドウの色
    g.fillRect (4,84,120,30);            //雛形描画

    g.font = FONT;                      //文字フォントを設定
    g.fillStyle = FONTSTYLE;            //文字色
g.fillText(gMessage1, 6, 96);           //メッセージ１行め描画
    if( gMessage2) {
        g.fillText(gMessage2, 6, 110);  //メッセージ2行め描画
    }
}

// ステータス描画
function DrawStates(g){
    g.font = FONT;                 //文字フォントを設定
    g.fillStyle = FONTSTYLE;       //文字色

    if(gLv > 100,gHP > 1000, gEx > 100) {
        gLv = 99;
        gHP = 99;
        gEx = 99
    }

    g.fillText("Lv", + 4, 13); DrawTextR(g, gLv, 36, 13);  //Lv
    g.fillText("HP", + 4, 25); DrawTextR(g, gHP, 36, 25);  //HP
    g.fillText("Ex", + 4, 37); DrawTextR(g, gEx, 36, 37);  //Ex
}

function DrawTextR(g, str, x, y){
    g.textAlign = "right";
    g.fillText(str, x, y);
    g.textAlign = "left";
}


function DrawTile( g, x, y, idx) {
    const ix = (idx % TILECOLUMN) * TILESIZE;
    const iy = Math.floor(idx / TILECOLUMN) * TILESIZE;
    g.drawImage( gImgMap, ix, iy, TILESIZE, TILESIZE, x, y, TILESIZE,TILESIZE );
}

// ダメージ量算出
function GetDamage(a){
    return(Math.floor(a * (1 + Math.random())));                  //攻撃力の１〜２倍
}


function IsBoss(){
    return(gEnemyType == gMonsterName.length - 1);
}


function LoadImage(){
    gImgBoss     = new Image(); gImgBoss.src = gFileBoss          //ラスボス画像読み込み
    gImgMap      = new Image(); gImgMap.src = gFileMap;           //マップ画像読み込み
    gImgMonster  = new Image(); gImgMonster.src = gFileMonster;   //モンスター画像読み込み
    gImgPlayer   = new Image(); gImgPlayer.src = gFilePlayer;     //プレイヤー画像読み込み
}

function SetMessage(v1,v2){
    gMessage1 = v1;
    gMessage2 = v2;
}


// フィールド進行処理
function TickField(){
    if(gPhase != 0){
        return;
    }

    if(gMoveX != 0 || gMoveY != 0 || gMessage1){}      //移動中の場合
   else if(gKey[37]){ gAngle = 1; gMoveX = -TILESIZE;} //左
   else if(gKey[38]){ gAngle = 3; gMoveY = -TILESIZE;} //上
   else if(gKey[39]){ gAngle = 2; gMoveX = TILESIZE;}  //右
   else if(gKey[40]){ gAngle = 0; gMoveY = TILESIZE;}  //下

    //移動後のタイル座標判定
    let mx = Math.floor( (gPlayerX + gMoveX) / TILESIZE); //移動後のタイル座標X    
    let my = Math.floor( (gPlayerY + gMoveY) / TILESIZE); //移動後のタイル座標X    
    mx += MAP_WIDTH;                                      //マップループ処理X
    mx %= MAP_WIDTH;                                      //マップループ処理X 
    my += MAP_HEIGHT;                                     //マップループ処理Y
    my %= MAP_HEIGHT;                                     //マップループ処理Y
    let m = gMap[my * MAP_WIDTH + mx];                    //タイル番号
    if (m < 3) {                                              //侵入不可の場合      
        gMoveX = 0;                                           //移動禁止X    
        gMoveY = 0;                                           //移動禁止Y
    }  
    
    if(Math.abs(gMoveX) + Math.abs(gMoveY) == SCROLL) {  //マス目移動が終わる直前

        if(m == 8 || m == 9) { //お城
            gHP = gMHP;        //全回復
            SetMessage("魔王を倒して！", null);
        }
    
        if(m == 10 || m == 11) { //街
            gHP = gMHP;        //全回復
            SetMessage("西の果てにも", "村があります");
        }
    
        if(m == 12) { //村
            gHP = gMHP;        //全回復
            SetMessage("カギは、", "洞窟にあります");
        }
    
        if(m == 13) { //洞窟
            gItem = 1;//カギ入手
            SetMessage("カギを手に入れた", null);
        }
    
        if(m == 14) { //扉
            if(gItem == 0) {
                gPlayerY -= TILESIZE;   //1マス上へ移動
                SetMessage("カギが必要です", null);
            } else {
            SetMessage("扉が開いた", null);
            }
        }
    
        if(m == 15) { //ボス
            AppearEnemy(gMonsterName.length - 1);
            gBossHP = gLv * 5
        }

        if(Math.random() * 8 < gEncounter[m]){             //ランダムエンカウント
            let t = Math.abs(gPlayerX / TILESIZE - START_X) +
                    Math.abs(gPlayerY / TILESIZE - START_Y);
            if(m == 6){                                    //マップタイプが林だった場合                                        
                t += 8;                                    //的レベルを0.5上昇
            }        
            if(m == 7){                                    //マップタイプが山だった場合
                t += 16;                                   //的レベルを1上昇
            }        
            t += Math.random() * 8;                        //的レベルを0~0.5上昇
            t = Math.floor(t / 16);
            t = Math.min(t, gMonsterName.length - 2);      //上限処理
            AppearEnemy(t);                                //敵出現フェーズ
        }
    }

    
    gPlayerX += TUG.Sign(gMoveX) * SCROLL;       //プレイヤー座標移動X
    gPlayerY += TUG.Sign(gMoveY) * SCROLL;       //プレイヤー座標移動X
    gMoveX   -= TUG.Sign(gMoveX) * SCROLL;       //移動量消費X
    gMoveY   -= TUG.Sign(gMoveY) * SCROLL;       //移動量消費Y


    // マップループ処理
    gPlayerX += (MAP_WIDTH * TILESIZE);
    gPlayerX %= (MAP_WIDTH * TILESIZE);
    gPlayerY += (MAP_HEIGHT * TILESIZE);
    gPlayerY %= (MAP_HEIGHT * TILESIZE);
}


function WmPaint() {
 
    DrawMain();

    const ca = document.getElementById("main");  //mainキャンバスの要素を取得
    const g  = ca.getContext("2d");              //2D描画コンテキストを取得
    g.drawImage(TUG.GR.mCanvas, 0, 0, TUG.GR.mCanvas.width, TUG.GR.mCanvas.height, 0, 0, gWidth, gHeight);   //仮想画面のイメージを実画面へ転送
}



//ブラウザサイズ変更イベント
function WmSize(){

    const ca = document.getElementById("main"); //mainキャンバスの要素を取得
    ca.width = window.innerWidth;               //キャンバスの幅をブラウザの幅へ変更
    ca.height = window.innerHeight;             //キャンバスの高さをブラウザの高さへ変更 

    const g = ca.getContext("2d");              //2D描画コンテキストを取得
    g.imageSmoothingEnabled = g.msImageSmoothingEnabled = SMOOTH; //保管処理

    // 実画面サイズを計測。ドットアスペクト比を維持したままでの最大サイズを計測する。
    gWidth = ca.width;
    gHeight = ca.height;
    if( gWidth / WIDTH < gHeight / HEIGHT) {
        gHeight = gWidth * HEIGHT / WIDTH;
    } else {
        gWidth = gHeight * WIDTH / HEIGHT;
    }
}



// タイマーイベント発生時の処理
TUG.onTimer = function(d){

    if(!gMessage1){
        while(d--) {
            gFrame++;                //内部カウンターを加算
            TickField();             //フィールド進行処理
        }
    }
    WmPaint();
}


// キー入力(DOWN)イベント
window.onkeydown = function(ev){
    let c = ev.keyCode;                         //キーコード

    if(gKey[c] != 0) {                          //すでに押下中の場合（キーリピート）
        return;
    }
    gKey[c] = 1;

    if(gPhase == 1) {                           //敵が現れた場合
        CommandFight();                         //戦闘コマンド
        return;
    }

    if(gPhase == 2) {                           //戦闘コマンド選択中の場合
        if(c == 13 || c == 90) {                //Enterキー、またはZキーの場合
            gOrder = Math.floor(Math.random() * 2) //戦闘行動順
            Action();
        } else {
            gCursor = 1 -gCursor;               //カーソル移動
        }
        return;
    }

    if(gPhase == 3) {
        Action();                               //戦闘行動処理
        return;
    }

    if(gPhase == 4) {
        CommandFight();                          //戦闘コマンド    
        return;
    }

    if(gPhase == 5) {
        gPhase = 6;
        AddExp(gEx += gEnemyType + 1);          //経験値可算
        SetMessage("敵をやっつけた", null);
        return;
    }

    if(gPhase == 6) {
        if(IsBoss() && gCursor == 0) {          //敵がラスボスでかつ「戦う」選択時
            SetMessage("魔王を倒し", "世界に平和が訪れた");            
            return;
        }
        gPhase = 0;                             //マップ移動フェーズ
    }

    if(gPhase == 7) {
        gPhase = 8;
        SetMessage("HPが0になった", null);
        return;
    }

    if(gPhase == 8) {
        SetMessage("GAME OVER", null);
        return;
    }

    gMessage1 = null;


}

// キー入力(UP)イベント
window.onkeyup = function(ev){
    gKey[ev.keyCode] = 0;
}


// ブラウザ起動イベント
window.onload = function(){

    LoadImage();
    

    WmSize();                                                 //画面サイズを初期化
    window.addEventListener("resize", function(){WmSize()});  //ブラウザサイズ変更時、WmSize()が呼ばれるよう指示
    TUG.init();
}