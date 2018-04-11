var gulp=require("gulp");
var concat=require("gulp-concat"); //合并
var uglify=require("gulp-uglify"); //js压缩
var rename=require("gulp-rename"); //重命名
var babel = require("gulp-babel");//es6转es5
var es2015 = require("babel-preset-es2015");//es6转es5
var minifyCSS = require('gulp-minify-css');//获取 minify-css 模块（用于压缩 CSS）
var sass = require('gulp-sass');//编译scss
var htmlreplace = require('gulp-html-replace'); //html中替换
var minifyHTML = require("gulp-minify-html"); //压缩html
var connect = require('gulp-connect');//服务器  livereload  自动刷新


//用于生产阶段   实时编译es6 scss 页面自动刷新
//
////sass编译
//gulp.task("sass",function(){
//	console.log("sass编译中。。");
//	gulp.src("git_wb_zcx/src/scss/*.scss")
//		.pipe(sass())
//      .pipe(gulp.dest("git_wb_zcx/src/css/"));
//});
//
////es6转es5
//gulp.task("es6",function(){   
//	console.log("es6转换中");
//	gulp.src("git_wb_zcx/src/js/es6/*.js")
//		.pipe(babel({presets:[es2015]}))
//      .pipe(gulp.dest("git_wb_zcx/src/js/lib"));
//});
//
////connect  自动刷新功能
//gulp.task('myserver', function() {//开启了服务器
//connect.server({
//  port: '8010',  //自定义的服务器端口   http://localhost:8010/git_wb_zcx/src/index.html
//  livereload: true
//});
//});
//
//gulp.task('con', function () {
//gulp.src('git_wb_zcx/src/index.html')
//  .pipe(connect.reload());
//});
//
//
//gulp.task('auto', function () {
//	gulp.watch('git_wb_zcx/src/js/es6/*.js', ['es6']);
//	gulp.watch('git_wb_zcx/src/scss/*.scss', ['sass']);
//	gulp.watch(['git_wb_zcx/**/*.html','git_wb_zcx/src/css/*.css','git_wb_zcx/src/**/*.js'], ['con']);
//});
//
////默认任务
//gulp.task('default', ["myserver","auto"], function(){
//	console.log("默认任务");
//});


/*生产阶段 待搭建*/

// css 文件的处理
//index
gulp.task('cssind', ()=>{
	console.log('cssind 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/css/common.css', 'git_wb_zcx/src/images/*/*.css','git_wb_zcx/src/css/index.css'])		
		.pipe( concat('index.css') )
		.pipe( minifyCSS() )
		.pipe( rename({'suffix':'.min'}) )
		.pipe( gulp.dest('git_wb_zcx/dist/css') );
});
//login
gulp.task('csslog', ()=>{
	console.log('csslog 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/css/common.css', 'git_wb_zcx/src/images/*/*.css','git_wb_zcx/src/css/login.css'])		
		.pipe( concat('login.css') )
		.pipe( minifyCSS() )
		.pipe( rename({'suffix':'.min'}) )
		.pipe( gulp.dest('git_wb_zcx/dist/css') );
});
//reg
gulp.task('cssreg', ()=>{
	console.log('cssreg 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/css/common.css', 'git_wb_zcx/src/images/*/*.css','git_wb_zcx/src/css/register.css'])		
		.pipe( concat('register.css') )
		.pipe( minifyCSS() )
		.pipe( rename({'suffix':'.min'}) )
		.pipe( gulp.dest('git_wb_zcx/dist/css') );
});
//list
gulp.task('csslist', ()=>{
	console.log('csslist 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/css/common.css', 'git_wb_zcx/src/images/*/*.css','git_wb_zcx/src/css/list.css'])		
		.pipe( concat('list.css') )
		.pipe( minifyCSS() )
		.pipe( rename({'suffix':'.min'}) )
		.pipe( gulp.dest('git_wb_zcx/dist/css') );
});
//tetail
gulp.task('cssdetail', ()=>{
	console.log('cssdetail 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/css/common.css', 'git_wb_zcx/src/images/*/*.css','git_wb_zcx/src/css/detail.css'])		
		.pipe( concat('detail.css') )
		.pipe( minifyCSS() )
		.pipe( rename({'suffix':'.min'}) )
		.pipe( gulp.dest('git_wb_zcx/dist/css') );
});
//accounts
gulp.task('cssaccounts', ()=>{
	console.log('cssaccounts 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/css/common.css', 'git_wb_zcx/src/images/*/*.css','git_wb_zcx/src/css/accounts.css'])		
		.pipe( concat('accounts.css') )
		.pipe( minifyCSS() )
		.pipe( rename({'suffix':'.min'}) )
		.pipe( gulp.dest('git_wb_zcx/dist/css') );
});

gulp.task("css",["cssind","csslog","cssreg","csslist","cssdetail","cssaccounts"],function(){
	console.log("css文件处理中..");
});

// js 文件的处理
gulp.task('js1', ()=>{
	console.log('js1 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/js/*/*.js'])
		.pipe( uglify() )
		.pipe( gulp.dest('git_wb_zcx/dist/js') );
});
gulp.task('js2', ()=>{
	console.log('js2 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/js/*.js'])
		.pipe( uglify() )
		.pipe( gulp.dest('git_wb_zcx/dist/js') );
});
// php 文件的处理
gulp.task('php', ()=>{
	console.log('php文件正在被处理..');
	gulp.src(['git_wb_zcx/src/js/**/*.php'])
		.pipe( gulp.dest('git_wb_zcx/dist/js') );
});
gulp.task("js",["js1","js2","php"],function(){
	console.log("js和php文件处理中..");
});

// html 文件的处理
gulp.task('htmlind', ()=>{
	console.log('htmlind 文件正在被处理..');
	gulp.src('git_wb_zcx/src/index.html')
		.pipe(htmlreplace({
			'cssindex': 'css/index.min.css'
		}))
		.pipe( gulp.dest('git_wb_zcx/dist') );
});
gulp.task('htmllog', ()=>{
	console.log('htmllog 文件正在被处理..');
	gulp.src('git_wb_zcx/src/html/login.html')
		.pipe(htmlreplace({
			'csslogin': '../css/login.min.css'
		}))
		.pipe( gulp.dest('git_wb_zcx/dist/html') );
});
gulp.task('htmlreg', ()=>{
	console.log('htmlreg 文件正在被处理..');
	gulp.src('git_wb_zcx/src/html/register.html')
		.pipe(htmlreplace({
			'cssregister': '../css/register.min.css'
		}))
		.pipe( gulp.dest('git_wb_zcx/dist/html') );
});
gulp.task('htmllist', ()=>{
	console.log('htmllist 文件正在被处理..');
	gulp.src('git_wb_zcx/src/html/list.html')
		.pipe(htmlreplace({
			'csslist': '../css/list.min.css'
		}))
		.pipe( gulp.dest('git_wb_zcx/dist/html') );
});
gulp.task('htmldetail', ()=>{
	console.log('htmldetail 文件正在被处理..');
	gulp.src('git_wb_zcx/src/html/detail.html')
		.pipe(htmlreplace({
			'cssdetail': '../css/detail.min.css'
		}))
		.pipe( gulp.dest('git_wb_zcx/dist/html') );
});
gulp.task('htmlaccounts', ()=>{
	console.log('htmlaccounts 文件正在被处理..');
	gulp.src('git_wb_zcx/src/html/accounts.html')
		.pipe(htmlreplace({
			'cssaccounts': '../css/accounts.min.css'
		}))
		.pipe( gulp.dest('git_wb_zcx/dist/html') );
});
gulp.task("html",["htmlind","htmllog","htmlreg","htmllist","htmldetail","htmlaccounts"],function(){
	console.log("html文件处理中..");
});

//data json的拷贝
gulp.task('json', ()=>{
	console.log('josn 文件正在被处理..');
	gulp.src('git_wb_zcx/src/data/*.json')
		.pipe( gulp.dest('git_wb_zcx/dist/data') );
});
//data img的拷贝
gulp.task('img', ()=>{
	console.log('img 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/images/*','!git_wb_zcx/src/images/icon'])
		.pipe( gulp.dest('git_wb_zcx/dist/images') );
});
//字体的拷贝
gulp.task('icon', ()=>{
	console.log('icon 文件正在被处理..');
	gulp.src(['git_wb_zcx/src/images/icon/*','!git_wb_zcx/src/images/icon/iconfont.css'])
		.pipe( gulp.dest('git_wb_zcx/dist/css') );
});

gulp.task('default', ["css","js","html","img","icon","json"], function(){
	console.log("生产中..");
});
