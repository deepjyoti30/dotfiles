const availableLocales = JSON.parse('\x5b\x22en\x22, \x22am\x22, \x22ar\x22, \x22bg\x22, \x22ca\x22, \x22cs\x22, \x22da\x22, \x22de\x22, \x22el\x22, \x22en_GB\x22, \x22es\x22, \x22es_419\x22, \x22et\x22, \x22fa\x22, \x22fi\x22, \x22fil\x22, \x22fr\x22, \x22hi\x22, \x22hr\x22, \x22hu\x22, \x22id\x22, \x22it\x22, \x22iw\x22, \x22ja\x22, \x22ko\x22, \x22lt\x22, \x22lv\x22, \x22ms\x22, \x22nl\x22, \x22no\x22, \x22pl\x22, \x22pt_BR\x22, \x22pt_PT\x22, \x22ro\x22, \x22ru\x22, \x22sk\x22, \x22sl\x22, \x22sr\x22, \x22sv\x22, \x22sw\x22, \x22th\x22, \x22tr\x22, \x22uk\x22, \x22vi\x22, \x22zh_CN\x22, \x22zh_TW\x22, \x22zu\x22\x5d'); const availableRtlLocales = JSON.parse('\x5b\x22ar\x22, \x22fa\x22, \x22iw\x22\x5d'); const prefix = 'keep_ba-prod'; _docs_flag_initialData = JSON.parse('\x7b\x22n_amt\x22:\x5b\x22audio\/aac\x22,\x22image\/jpeg\x22,\x22image\/png\x22,\x22image\/gif\x22\x5d,\x22n_afoiu\x22:false,\x22n_k\x22:\x22AIzaSyDzSyl-DPNxSyc7eghRsB4oNNetrnvnH0I\x22,\x22n_ars\x22:\x22https:\/\/www.googleapis.com\/auth\/reminders\x22,\x22n_s\x22:\x22https:\/\/www.googleapis.com\/auth\/memento\x22,\x22n_ss\x22:\x22https:\/\/www.googleapis.com\/auth\/drive,https:\/\/www.googleapis.com\/auth\/plus.peopleapi.readwrite\x22,\x22n_ats\x22:\x22https:\/\/www.googleapis.com\/auth\/client_channel\x22,\x22n_atas\x22:\x22https:\/\/www.googleapis.com\/auth\/taskassist.readonly\x22,\x22n_v\x22:\x22v1\x22,\x22n_cc\x22:\x22TR, LB, AN, NC, MI, SH, SNB, DR\x22,\x22n_c\x22:\x22192748556389-k5lj2ak6j74mo13ulslbkqkrd8d6b1bh.apps.googleusercontent.com\x22,\x22n_cp\x22:\x22CRX_BA\x22,\x22n_csbs\x22:120,\x22n_dt\x22:\x22\x22,\x22n_deau\x22:\x22https:\/\/www.googleapis.com\/\x22,\x22n_ecsw\x22:false,\x22n_ecil\x22:false,\x22n_edg\x22:true,\x22n_eema\x22:false,\x22n_eil\x22:false,\x22n_eod\x22:true,\x22n_ep\x22:true,\x22n_erds\x22:true,\x22n_esiv\x22:false,\x22n_imb\x22:10485760,\x22n_imp\x22:26214400,\x22n_ica\x22:true,\x22n_lcu\x22:false,\x22n_mpau\x22:\x22https:\/\/maps.googleapis.com\/maps\/api\/place\/\x22,\x22n_iu\x22:\x22https:\/\/keep.google.com\/media\/\x22,\x22n_nmri\x22:5000,\x22n_nib\x22:5000,\x22n_nmb\x22:1800000,\x22n_oe\x22:true,\x22n_pau\x22:\x22https:\/\/www.googleapis.com\/\x22,\x22n_rau\x22:\x22https:\/\/www.googleapis.com\/\x22,\x22n_scp\x22:false,\x22n_sit\x22:\x5b\x22image\/jpeg\x22,\x22image\/png\x22,\x22image\/gif\x22\x5d,\x22n_t\x22:true,\x22n_tc\x22:1032,\x22n_tu\x22:\x22https:\/\/client-channel.google.com\/client-channel\/channel\x22,\x22n_tsu\x22:\x22https:\/\/clients4.google.com\/invalidation\/lcs\/request\x22,\x22n_ts\x22:1032,\x22n_taau\x22:\x22https:\/\/taskassist-pa.googleapis.com\/\x22,\x22n_tmd\x22:7,\x22n_ur\x22:\x22edit\x22,\x22n_ugat\x22:true,\x22n_uo\x22:true,\x22n_wfp\x22:false,\x22n_wcv\x22:\x223.2.9.9\x22\x7d');
const langSynonyms = {
  'he': 'iw',
}
let locale = window.navigator.language;
if (langSynonyms[locale]) {
  locale = langSynonyms[locale];
}

const direction = availableRtlLocales.indexOf(locale) >= 0 ? 'rtl' : 'ltr';

const jsFileName = prefix + '_app_script_' + direction + '.js';
const jsEl = document.createElement('script');
jsEl.setAttribute('type', 'text/javascript');
jsEl.setAttribute('src', jsFileName);

const cssFileName = prefix + '_app_styles_' + direction + '.css';
const cssEl = document.createElement('link');
cssEl.setAttribute('rel', 'stylesheet');
cssEl.setAttribute('href', cssFileName);

const symbolsFileName = availableLocales.indexOf(locale) >= 0 ? locale : 'en';
const symbolsEl = document.createElement('script');
symbolsEl.setAttribute('type', 'text/javascript');
symbolsEl.setAttribute('src', 'i18n/symbols_' + symbolsFileName + '.js');

const head = document.getElementsByTagName('head')[0];
head.appendChild(symbolsEl);
head.appendChild(cssEl);
head.appendChild(jsEl);

jsEl.onload = function() {
  initNotesBrowserAction();
};
