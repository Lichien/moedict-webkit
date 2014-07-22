// Generated by LiveScript 1.2.0
(function(){
  var React, ref$, p, i, a, h1, div, main, span, br, h3, table, tr, td, th, input, hr, meta, ol, li, ruby, small, any, map, withProperties, divInline, h1Name, nbsp, CurrentId, Result, Term, Translations, HASHOF, XREFLABELOF, XRefs, Heteronym, decorateRuby, DefinitionList, Definition, CJKRADICALS, RadicalGlyph, RadicalTable, List, httpMap, http, canPlayMp3, canPlayOgg, canPlayOpus, untag, groupBy, Consonants, Vowels, Tones, re, C, V, keyMap, decodeLangPart, slice$ = [].slice, replace$ = ''.replace, join$ = [].join, split$ = ''.split;
  React = (typeof window != 'undefined' && window !== null ? window.React : void 8) || require('react');
  ref$ = React.DOM, p = ref$.p, i = ref$.i, a = ref$.a, h1 = ref$.h1, div = ref$.div, main = ref$.main, span = ref$.span, br = ref$.br, h3 = ref$.h3, table = ref$.table, tr = ref$.tr, td = ref$.td, th = ref$.th, input = ref$.input, hr = ref$.hr, meta = ref$.meta, ol = ref$.ol, li = ref$.li, ruby = ref$.ruby, small = ref$.small;
  ref$ = require('prelude-ls'), any = ref$.any, map = ref$.map;
  withProperties = function(tag, defProps){
    defProps == null && (defProps = {});
    return function(props){
      var args;
      props == null && (props = {});
      args = slice$.call(arguments, 1);
      return tag.apply(null, [import$(import$({}, defProps), props)].concat(slice$.call(args)));
    };
  };
  divInline = withProperties(div, {
    style: {
      display: 'inline'
    }
  });
  h1Name = withProperties(h1, {
    itemProp: 'name'
  });
  nbsp = '\u00A0';
  CurrentId = null;
  Result = React.createClass({
    render: function(){
      switch (this.props.type) {
      case 'term':
        return Term(this.props);
      case 'list':
        return List(this.props);
      case 'radical':
        return RadicalTable(this.props);
      case 'spin':
        return divInline({
          id: 'loading',
          style: {
            marginTop: '19px',
            marginLeft: '1px'
          }
        }, h1({}, this.props.id));
      case 'html':
        return divInline({
          dangerouslySetInnerHTML: {
            __html: this.props.html
          }
        });
      default:
        return div({});
      }
    }
  });
  Term = React.createClass({
    render: function(){
      var ref$, LANG, H, ref1$, title, english, heteronyms, radical, translation, nrsCount, sCount, py, xrefs, aStroke, $char, list, res$, i$, len$, props;
      ref$ = this.props, LANG = ref$.LANG, H = (ref1$ = ref$.H) != null
        ? ref1$
        : HASHOF[LANG], title = ref$.title, english = ref$.english, heteronyms = ref$.heteronyms, radical = ref$.radical, translation = ref$.translation, nrsCount = ref$.non_radical_stroke_count, sCount = ref$.stroke_count, py = ref$.pinyin, xrefs = ref$.xrefs;
      CurrentId = this.props.id;
      aStroke = a({
        className: 'iconic-circle stroke icon-pencil',
        title: '筆順動畫',
        style: {
          color: 'white'
        }
      });
      $char = radical
        ? div({
          className: 'radical'
        }, RadicalGlyph({
          char: replace$.call(radical, /<\/?a[^>]*>/g, '')
        }), span({
          className: 'count'
        }, span({
          className: 'sym'
        }, '+'), nrsCount), span({
          className: 'count'
        }, " = " + sCount), nbsp, aStroke)
        : div({
          className: 'radical'
        }, aStroke);
      res$ = [];
      for (i$ = 0, len$ = heteronyms.length; i$ < len$; ++i$) {
        props = heteronyms[i$];
        res$.push(Heteronym(import$({
          $char: $char,
          H: H,
          LANG: LANG,
          title: title,
          py: py,
          english: english
        }, props)));
      }
      list = res$;
      if (xrefs != null && xrefs.length) {
        list = list.concat(XRefs({
          LANG: LANG,
          xrefs: xrefs
        }));
      }
      if (translation) {
        list = list.concat(Translations({
          translation: translation
        }));
      }
      return divInline.apply(null, [{}].concat(slice$.call(list)));
    }
  });
  Translations = React.createClass({
    render: function(){
      var translation, key, val;
      translation = this.props.translation;
      return div({
        className: 'xrefs'
      }, span.apply(null, [{
        className: 'translation'
      }].concat((function(){
        var ref$, results$ = [];
        for (key in ref$ = {
          English: '英',
          francais: '法',
          Deutsch: '德'
        }) {
          val = ref$[key];
          if (translation[key]) {
            results$.push(div({
              className: 'xref-line'
            }, span({
              className: 'fw_lang'
            }, val), span({
              className: 'fw_def'
            }, untag((join$.call(translation[key], ', ')).replace(/, CL:.*/g, '').replace(/\|(?:<\/?a[^>*]>|[^[,.(])+/g, '')))));
          }
        }
        return results$;
      }()))));
    }
  });
  HASHOF = {
    a: '#',
    t: "#'",
    h: '#:',
    c: '#~'
  };
  XREFLABELOF = {
    a: '華',
    t: '閩',
    h: '客',
    c: '陸',
    ca: '臺'
  };
  XRefs = React.createClass({
    render: function(){
      var ref$, LANG, xrefs, lang, words, H, word;
      ref$ = this.props, LANG = ref$.LANG, xrefs = ref$.xrefs;
      return div.apply(null, [{
        className: 'xrefs'
      }].concat((function(){
        var i$, ref$, len$, ref1$, results$ = [];
        for (i$ = 0, len$ = (ref$ = xrefs).length; i$ < len$; ++i$) {
          ref1$ = ref$[i$], lang = ref1$.lang, words = ref1$.words;
          H = HASHOF[lang];
          results$.push(div({
            className: 'xref-line'
          }, span({
            className: 'xref part-of-speech'
          }, XREFLABELOF[LANG + "" + lang] || XREFLABELOF[lang]), nbsp, span.apply(null, [{
            className: 'xref',
            itemProp: 'citation'
          }].concat(slice$.call(intersperse('、', (fn$())))))));
        }
        return results$;
        function fn$(){
          var i$, ref$, len$, results$ = [];
          for (i$ = 0, len$ = (ref$ = words).length; i$ < len$; ++i$) {
            word = ref$[i$];
            results$.push(a({
              className: 'xref',
              href: H + "" + word
            }, word));
          }
          return results$;
        }
      }())));
    }
  });
  Heteronym = React.createClass({
    render: function(){
      var ref$, $char, H, LANG, title, english, id, audio_id, ref1$, bopomofo, trs, py, pinyin, definitions, antonyms, synonyms, variants, specific_to, alt, re, pinyinList, t, variant, mp3, __html, titleRuby, youyin, bAlt, pAlt, cnSpecific, list, defs;
      ref$ = this.props, $char = ref$.$char, H = ref$.H, LANG = ref$.LANG, title = ref$.title, english = ref$.english, id = ref$.id, audio_id = (ref1$ = ref$.audio_id) != null ? ref1$ : id, bopomofo = ref$.bopomofo, trs = (ref1$ = ref$.trs) != null ? ref1$ : '', py = ref$.py, pinyin = (ref1$ = ref$.pinyin) != null
        ? ref1$
        : py || trs || '', definitions = (ref1$ = ref$.definitions) != null
        ? ref1$
        : [], antonyms = ref$.antonyms, synonyms = ref$.synonyms, variants = ref$.variants, specific_to = ref$.specific_to, alt = ref$.alt;
      if (audio_id && LANG === 'h') {
        re = /(.)\u20DE(\S+)/g;
        pinyinList = [];
        while (t = re.exec(pinyin)) {
          variant = " 四海大平安".indexOf(t[1]);
          mp3 = http("h.moedict.tw/" + variant + "-" + audio_id + ".ogg");
          if (mp3 && !canPlayOgg()) {
            mp3 = mp3.replace(/ogg$/, 'mp3');
          }
          pinyinList = pinyinList.concat(span({
            className: 'audioBlock'
          }, div({
            className: 'icon-play playAudio part-of-speech',
            onClick: fn$
          }, t[1])));
          __html = t[2].replace(/¹/g, '<sup>1</sup>').replace(/²/g, '<sup>2</sup>').replace(/³/g, '<sup>3</sup>').replace(/⁴/g, '<sup>4</sup>').replace(/⁵/g, '<sup>5</sup>');
          pinyinList = pinyinList.concat(span({
            dangerouslySetInnerHTML: {
              __html: __html
            }
          }));
        }
      }
      if (!/</.test(title)) {
        title = "<div class='stroke' title='筆順動畫'>" + title + "</div>";
      }
      t = untag(h(title));
      if (LANG !== 'h') {
        ref$ = decorateRuby(this.props), titleRuby = ref$.ruby, youyin = ref$.youyin, bAlt = ref$.bAlt, pAlt = ref$.pAlt, cnSpecific = ref$.cnSpecific, bopomofo = ref$.bopomofo, pinyin = ref$.pinyin;
      }
      list = [titleRuby
        ? ruby({
          className: 'rightangle',
          dangerouslySetInnerHTML: {
            __html: titleRuby
          }
        })
        : span({
          dangerouslySetInnerHTML: {
            __html: title
          }
        })];
      if (youyin) {
        list = list.concat(small({
          className: 'youyin'
        }, youyin));
      }
      if (bAlt) {
        list = list.concat(small({
          className: 'alternative'
        }, span({
          className: 'pinyin'
        }, pAlt), span({
          className: 'bopomofo'
        }, bAlt)));
      }
      if (english) {
        list = list.concat(span({
          lang: 'en',
          className: 'english'
        }, english));
      }
      if (specific_to) {
        list = list.concat(span({
          className: 'specific_to'
        }, specific_to));
      }
      return divInline.apply(null, [
        {}, meta({
          itemProp: 'image',
          content: encodeURIComponent(t) + ".png"
        }), meta({
          itemProp: 'name',
          content: t
        })
      ].concat(
        slice$.call($char), [
          h1.apply(null, [{
            className: 'title',
            'data-title': t
          }].concat(slice$.call(list))), div({
            className: 'bopomofo'
          }, alt != null ? div({
            lang: 'zh-Hans',
            className: 'cn-specific'
          }, span({
            className: 'xref part-of-speech'
          }, '简'), span({
            className: 'xref'
          }, untag(alt))) : void 8, cnSpecific
            ? small({
              className: 'alternative cn-specific'
            }, span({
              className: 'pinyin'
            }, pinyin), span({
              className: 'bopomofo'
            }, bopomofo))
            : LANG === 'h' ? span.apply(null, [{
              className: 'pinyin'
            }].concat(slice$.call(pinyinList))) : void 8), div.apply(null, [{
            className: 'entry',
            itemProp: 'articleBody'
          }].concat((function(){
            var i$, ref$, len$, results$ = [];
            for (i$ = 0, len$ = (ref$ = groupBy('type', definitions.slice())).length; i$ < len$; ++i$) {
              defs = ref$[i$];
              results$.push(DefinitionList({
                LANG: LANG,
                H: H,
                defs: defs,
                synonyms: synonyms,
                antonyms: antonyms,
                variants: variants
              }));
            }
            return results$;
          }())))
        ]
      ));
      function fn$(it){
        return window.playAudio(it.target, mp3);
      }
    }
  });
  decorateRuby = function(arg$){
    var LANG, title, bopomofo, py, pinyin, ref$, trs, youyin, bAlt, pAlt, cnSpecific, t, b, cnSpecificBpmf, ruby, p, i$, len$, idx, yin, span, cns, tws;
    LANG = arg$.LANG, title = arg$.title, bopomofo = arg$.bopomofo, py = arg$.py, pinyin = (ref$ = arg$.pinyin) != null ? ref$ : py, trs = arg$.trs;
    pinyin == null && (pinyin = trs);
    if (LANG !== 'c') {
      pinyin = replace$.call(pinyin, /<[^>]*>/g, '').replace(/（.*）/, '');
    }
    bopomofo == null && (bopomofo = trs2bpmf(LANG, pinyin + ""));
    if (LANG !== 'c') {
      bopomofo = replace$.call(bopomofo, /<[^>]*>/g, '');
    }
    pinyin = pinyin.replace(/ɡ/g, 'g');
    pinyin = pinyin.replace(/ɑ/g, 'a');
    pinyin = pinyin.replace(/，/g, ', ');
    if (/^（[語|讀|又]音）/.exec(bopomofo)) {
      youyin = bopomofo.replace(/（([語|讀|又]音)）.*/, '$1');
    }
    bAlt = /[變|\/]/.exec(bopomofo)
      ? bopomofo.replace(/.*[\(變\)\u200B|\/](.*)/, '$1')
      : /.+（又音）.+/.exec(bopomofo) ? bopomofo.replace(/.+（又音）/, '') : '';
    bAlt = bAlt.replace(/ /g, '\u3000').replace(/([ˇˊˋ])\u3000/g, '$1 ');
    pAlt = /[變|\/]/.exec(pinyin)
      ? pinyin.replace(/.*[\(變\)\u200B|\/](.*)/, '$1')
      : /.+（又音）.+/.exec(bopomofo) ? function(){
        var _py, i$, to$, i;
        _py = pinyin.split(' ');
        for (i$ = 0, to$ = _py.length / 2 - 1; i$ <= to$; ++i$) {
          i = i$;
          _py.shift();
        }
        return _py.join(' ');
      }() : '';
    bopomofo = bopomofo.replace(/([^ ])(ㄦ)/g, '$1 $2').replace(/([ ]?[\u3000][ ]?)/g, ' ');
    bopomofo = bopomofo.replace(/([ˇˊˋ˪˫])[ ]?/g, '$1 ').replace(/([ㆴㆵㆶㆷ][̍͘]?)/g, '$1 ');
    cnSpecific = '';
    if (/陸/.exec(bopomofo)) {
      cnSpecific = 'cn-specific';
    }
    t = title.replace(/<a[^>]+>/g, '`').replace(/<\/a>/g, '~');
    t = replace$.call(t, /<[^>]+>/g, '');
    b = bopomofo.replace(/\s?[，、；。－—,\.;]\s?/g, ' ');
    b = b.replace(/（[語|讀|又]音）[\u200B]?/, '');
    b = b.replace(/\(變\)\u200B\/.*/, '');
    b = b.replace(/\/.*/, '');
    if (/<br>陸/.exec(b)) {
      cnSpecificBpmf = replace$.call(b, /.*<br>陸./, '');
    }
    b = b.replace(/<br>(.*)/, '');
    b = replace$.call(b, /.\u20DF/g, '');
    if (/^([\uD800-\uDBFF][\uDC00-\uDFFF]|.)$/.exec(t)) {
      ruby = '<rbc><div class="stroke" title="筆順動畫"><rb>' + t + '</rb></div></rbc>';
    } else {
      ruby = '<rbc>' + t.replace(/([^`~]+)/g, function(m, ci, o, s){
        return /^([\uD800-\uDBFF][\uDC00-\uDFFF]|[^，、；。－—])$/.exec(ci)
          ? '<rb word="' + ci + '">' + ci + '</rb>'
          : ci.replace(/([\uD800-\uDBFF][\uDC00-\uDFFF]|[^，、；。－—])/g, '<rb word="' + ci + '" word-order="' + o + '">$1</rb>');
      }).replace(/([`~])/g, '') + '</rbc>';
    }
    p = pinyin.replace(/[,\.;，、；。－—]\s?/g, ' ');
    p = p.replace(/\(變\)\u200B.*/, '');
    p = p.replace(/\/.*/, '');
    p = p.replace(/<br>.*/, '');
    p = p.split(' ');
    for (i$ = 0, len$ = p.length; i$ < len$; ++i$) {
      idx = i$;
      yin = p[i$];
      if (yin) {
        span = LANG === 't' && /\-/g.exec(yin)
          ? ' rbspan="' + (yin.match(/[\-]+/g).length + 1) + '"'
          : LANG !== 't' && /^[^eēéěè].*r$/g.exec(yin)
            ? (cnSpecificBpmf && (cns = split$.call(cnSpecificBpmf, /\s+/), tws = split$.call(b, /\s+/), tws[tws.length - 2] = cns[cns.length - 2], bAlt = b.replace(/ /g, '\u3000').replace(/\sㄦ$/, 'ㄦ'), b = join$.call(tws, ' ')), ' rbspan="2"')
            : LANG !== 't' && /[aāáǎàeēéěèiīíǐìoōóǒòuūúǔùüǖǘǚǜ]+/g.exec(yin) ? ' rbspan="' + yin.match(/[aāáǎàeēéěèiīíǐìoōóǒòuūúǔùüǖǘǚǜ]+/g).length + '"' : '';
        p[idx] = "<rt" + span + ">" + yin + "</rt>";
      }
    }
    ruby += '<rtc class="zhuyin"><rt>' + b.replace(/[ ]+/g, '</rt><rt>') + '</rt></rtc>';
    ruby += '<rtc class="romanization">';
    ruby += p.join('');
    ruby += '</rtc>';
    if (LANG === 'c') {
      if (/<br>/.exec(bopomofo)) {
        pinyin = pinyin.replace(/.*<br>/, '').replace(/陸./, '').replace(/\s?([,\.;])\s?/g, '$1 ');
        bopomofo = bopomofo.replace(/.*<br>/, '').replace(/陸./, '').replace(/\s?([，。；])\s?/g, '$1');
        bopomofo = bopomofo.replace(/ /g, '\u3000').replace(/([ˇˊˋ])\u3000/g, '$1 ');
      } else {
        pinyin = '';
        bopomofo = '';
      }
    } else if (LANG === 'h') {
      bopomofo = '';
    }
    return {
      ruby: ruby,
      youyin: youyin,
      bAlt: bAlt,
      pAlt: pAlt,
      cnSpecific: cnSpecific,
      pinyin: pinyin,
      bopomofo: bopomofo
    };
  };
  DefinitionList = React.createClass({
    render: function(){
      var ref$, H, LANG, defs, list, t, d;
      ref$ = this.props, H = ref$.H, LANG = ref$.LANG, defs = ref$.defs;
      list = [];
      if ((ref$ = defs[0]) != null && ref$.type) {
        list = list.concat(intersperse(nbsp, (function(){
          var i$, ref$, len$, results$ = [];
          for (i$ = 0, len$ = (ref$ = defs[0].type.split(',')).length; i$ < len$; ++i$) {
            t = ref$[i$];
            results$.push(span({
              className: 'part-of-speech'
            }, untag(t)));
          }
          return results$;
        }())));
      }
      list = list.concat(ol.apply(null, [{}].concat((function(){
        var i$, ref$, len$, results$ = [];
        for (i$ = 0, len$ = (ref$ = defs).length; i$ < len$; ++i$) {
          d = ref$[i$];
          results$.push(Definition(import$({
            H: H,
            LANG: LANG
          }, d)));
        }
        return results$;
      }()))));
      list = list.concat(decorateNyms(this.props));
      return div.apply(null, [{
        className: 'entry-item'
      }].concat(slice$.call(list)));
    }
  });
  function decorateNyms(props){
    var list, re, key, ref$, val, t;
    list = [];
    re = />([^,<]+)</g;
    for (key in ref$ = {
      synonyms: '似',
      antonyms: '反',
      variants: '異'
    }) {
      val = ref$[key];
      if (props[key]) {
        list = list.concat(span.apply(null, [
          {
            className: key
          }, span({
            className: 'part-of-speech'
          }, val), nbsp
        ].concat(slice$.call(intersperse('、', (fn$()))))));
      }
    }
    return list;
    function fn$(){
      var results$ = [];
      while (t = re.exec(props[key])) {
        results$.push(a({
          href: props.H + "" + t[1]
        }, t[1]));
      }
      return results$;
    }
  }
  Definition = React.createClass({
    render: function(it){
      var ref$, LANG, type, def, antonyms, synonyms, $afterDef, isColonDef, defString, list, res$, i$, len$, key, style, wrapper;
      ref$ = this.props, LANG = ref$.LANG, type = ref$.type, def = ref$.def, antonyms = ref$.antonyms, synonyms = ref$.synonyms;
      if (/∥/.exec(def)) {
        $afterDef = div({
          style: {
            margin: "0 0 22px -44px"
          },
          dangerouslySetInnerHTML: {
            __html: h(replace$.call(def, /^[^∥]+/, ''))
          }
        });
        def = replace$.call(def, /∥.*/, '');
      }
      isColonDef = LANG === 'c' && /[:：]<\/span>$/.exec(def) && !any(function(it){
        return /^\s*\(\d+\)/.exec(it.def);
      }, defs);
      defString = h(expandDef(def)).replace(/([：。」])([\u278A-\u2793\u24eb-\u24f4])/g, '$1\uFFFC$2');
      res$ = [];
      for (i$ = 0, len$ = (ref$ = defString.split('\uFFFC')).length; i$ < len$; ++i$) {
        it = ref$[i$];
        res$.push(span({
          className: 'def',
          dangerouslySetInnerHTML: {
            __html: h(it)
          }
        }));
      }
      list = res$;
      for (i$ = 0, len$ = (ref$ = ['example', 'quote', 'link']).length; i$ < len$; ++i$) {
        key = ref$[i$];
        if (this.props[key]) {
          list = list.concat((fn$.call(this)));
        }
      }
      list = list.concat(decorateNyms(this.props));
      if ($afterDef) {
        list = list.concat($afterDef);
      }
      style = isColonDef
        ? {
          marginLeft: '-28px'
        }
        : {};
      wrapper = /^\s*\(\d+\)/.exec(def) || isColonDef
        ? function(it){
          return it;
        }
        : function(it){
          return li({}, it);
        };
      return wrapper(p.apply(null, [{
        className: 'definition',
        style: style
      }].concat(slice$.call(list))));
      function fn$(){
        var i$, ref$, len$, results$ = [];
        for (i$ = 0, len$ = (ref$ = this.props[key]).length; i$ < len$; ++i$) {
          it = ref$[i$];
          results$.push(span({
            className: key,
            dangerouslySetInnerHTML: {
              __html: h(it)
            }
          }));
        }
        return results$;
      }
    }
  });
  CJKRADICALS = '⼀一⼁丨⼂丶⼃丿⼄乙⼅亅⼆二⼇亠⼈人⼉儿⼊入⼋八⼌冂⼍冖⼎冫⼏几⼐凵⼑刀⼒力⼓勹⼔匕⼕匚⼖匸⼗十⼘卜⼙卩⼚厂⼛厶⼜又⼝口⼞囗⼟土⼠士⼡夂⼢夊⼣夕⼤大⼥女⼦子⼧宀⼨寸⼩小⼪尢⼫尸⼬屮⼭山⼮巛⼯工⼰己⼱巾⼲干⼳幺⼴广⼵廴⼶廾⼷弋⼸弓⼹彐⼺彡⼻彳⼼心⼽戈⼾戶⼿手⽀支⽁攴⽂文⽃斗⽄斤⽅方⽆无⽇日⽈曰⽉月⽊木⽋欠⽌止⽍歹⽎殳⽏毋⽐比⽑毛⽒氏⽓气⽔水⽕火⽖爪⽗父⽘爻⽙爿⺦丬⽚片⽛牙⽜牛⽝犬⽞玄⽟玉⽠瓜⽡瓦⽢甘⽣生⽤用⽥田⽦疋⽧疒⽨癶⽩白⽪皮⽫皿⽬目⽭矛⽮矢⽯石⽰示⽱禸⽲禾⽳穴⽴立⽵竹⽶米⽷糸⺰纟⽸缶⽹网⽺羊⽻羽⽼老⽽而⽾耒⽿耳⾀聿⾁肉⾂臣⾃自⾄至⾅臼⾆舌⾇舛⾈舟⾉艮⾊色⾋艸⾌虍⾍虫⾎血⾏行⾐衣⾑襾⾒見⻅见⾓角⾔言⻈讠⾕谷⾖豆⾗豕⾘豸⾙貝⻉贝⾚赤⾛走⾜足⾝身⾞車⻋车⾟辛⾠辰⾡辵⻌辶⾢邑⾣酉⾤釆⾥里⾦金⻐钅⾧長⻓长⾨門⻔门⾩阜⾪隶⾫隹⾬雨⾭靑⾮非⾯面⾰革⾱韋⻙韦⾲韭⾳音⾴頁⻚页⾵風⻛风⾶飛⻜飞⾷食⻠饣⾸首⾹香⾺馬⻢马⾻骨⾼高⾽髟⾾鬥⾿鬯⿀鬲⿁鬼⿂魚⻥鱼⻦鸟⿃鳥⿄鹵⻧卤⿅鹿⿆麥⻨麦⿇麻⿈黃⻩黄⿉黍⿊黑⿋黹⿌黽⻪黾⿍鼎⿎鼓⿏鼠⿐鼻⿑齊⻬齐⿒齒⻮齿⿓龍⻰龙⿔龜⻳龟⿕龠';
  RadicalGlyph = React.createClass({
    render: function(){
      var ref$, char, h, idx;
      ref$ = this.props, char = ref$.char, h = ref$.h;
      idx = CJKRADICALS.indexOf(char);
      if (!(idx % 2)) {
        char = CJKRADICALS[idx + 1];
      }
      return span({
        className: 'glyph'
      }, a({
        title: '部首檢索',
        className: 'xref',
        href: H + "@" + char,
        style: {
          color: 'white'
        }
      }, " " + char));
    }
  });
  RadicalTable = React.createClass({
    render: function(){
      var ref$, terms, id, H, title, rows, list, i$, len$, strokes, chars, chs, j$, len1$, ch;
      ref$ = this.props, terms = ref$.terms, id = ref$.id, H = ref$.H;
      id = replace$.call(id, /^[@=]/, '');
      if (/\S/.exec(id)) {
        title = h1Name({}, id + " ", a({
          className: 'xref',
          href: '#',
          title: '部首表'
        }, '部'));
      } else {
        H += '@';
        title = h1Name({}, '部首表');
      }
      rows = $.parseJSON(terms);
      list = [];
      for (i$ = 0, len$ = rows.length; i$ < len$; ++i$) {
        strokes = i$;
        chars = rows[i$];
        if (chars != null && chars.length) {
          chs = [];
          for (j$ = 0, len1$ = chars.length; j$ < len1$; ++j$) {
            ch = chars[j$];
            chs = chs.concat(a({
              className: 'stroke-char',
              href: H + "" + ch
            }, ch));
            chs = chs.concat(' ');
          }
          list = list.concat(span({
            className: 'stroke-count'
          }, strokes));
          list = list.concat(span({
            className: 'stroke-list'
          }, chs));
          list = list.concat(hr({
            style: {
              margin: 0,
              padding: 0,
              height: 0
            }
          }));
        }
      }
      return divInline({}, title, div.apply(null, [{
        className: 'list'
      }].concat(slice$.call(list))));
    }
  });
  List = React.createClass({
    render: function(it){
      var ref$, terms, id, H, LRU, list, btn, re, t;
      ref$ = this.props, terms = ref$.terms, id = ref$.id, H = ref$.H, LRU = ref$.LRU;
      if (!terms) {
        return div({});
      }
      id = replace$.call(id, /^[@=]/, '');
      terms = replace$.call(terms, /^[^"]*/, '');
      list = [h1Name({}, id)];
      if (id === '字詞紀錄簿' && !terms) {
        btn = i({
          className: 'icon-star-empty'
        });
        list = list.concat(p({
          className: 'bg-info'
        }, "（請按詞條右方的 ", btn, " 按鈕，即可將字詞加到這裡。）"));
      }
      function strToList(str){
        var re, t, it, results$ = [];
        re = /"([^"]+)"[^"]*/g;
        while (t = re.exec(str)) {
          it = t[1];
          results$.push(span({
            style: {
              clear: 'both',
              display: 'block'
            }
          }, '\u00B7', a({
            href: H + "" + it
          }, it)));
        }
        return results$;
      }
      if (/^";/.exec(terms)) {
        re = /";([^;"]+);([^;"]+)"[^"]*/g;
        list = list.concat(table.apply(null, [
          {}, tr.apply(null, [{}].concat((function(){
            var i$, ref$, len$, results$ = [];
            for (i$ = 0, len$ = (ref$ = ['臺', '陸']).length; i$ < len$; ++i$) {
              it = ref$[i$];
              results$.push(th({
                width: 200
              }, span({
                className: 'part-of-speech'
              }, it)));
            }
            return results$;
          }())))
        ].concat((function(){
          var results$ = [];
          while (t = re.exec(terms)) {
            results$.push(tr.apply(null, [{
              style: {
                borderTop: '1px solid #ccc'
              }
            }].concat((fn$()))));
          }
          return results$;
          function fn$(){
            var i$, ref$, len$, results$ = [];
            for (i$ = 0, len$ = (ref$ = [t[1], t[2]]).length; i$ < len$; ++i$) {
              it = ref$[i$];
              results$.push(td({}, a({
                href: H + "" + it
              }, it)));
            }
            return results$;
          }
        }()))));
      } else {
        list = list.concat(strToList(terms));
      }
      if (id === '字詞紀錄簿' && LRU) {
        re = /"([^"]+)"[^"]*/g;
        list = list.concat((br({}), h3({
          id: 'lru'
        }, '最近查閱過的字詞', input({
          id: 'btn-clear-lru',
          type: 'button',
          className: 'btn-default btn btn-tiny',
          value: '清除',
          style: {
            marginLeft: '10px'
          }
        }))));
        list = list.concat(strToList(LRU));
      }
      return divInline.apply(null, [{}].concat(slice$.call(list)));
    }
  });
  httpMap = {
    a: '203146b5091e8f0aafda-15d41c68795720c6e932125f5ace0c70.ssl.cf1.rackcdn.com',
    h: 'a7ff62cf9d5b13408e72-351edcddf20c69da65316dd74d25951e.ssl.cf1.rackcdn.com',
    t: '1763c5ee9859e0316ed6-db85b55a6a3fbe33f09b9245992383bd.ssl.cf1.rackcdn.com',
    'stroke-json': '829091573dd46381a321-9e8a43b8d3436eaf4353af683c892840.ssl.cf1.rackcdn.com',
    stroke: '/626a26a628fa127d6a25-47cac8eba79cfb787dbcc3e49a1a65f1.ssl.cf1.rackcdn.com'
  };
  http = function(it){
    return "https://" + it.replace(/^([^.]+)\.[^\/]+/, function(xs, x){
      return httpMap[x] || xs;
    });
  };
  canPlayMp3 = function(){
    return true;
  };
  canPlayOgg = function(){
    return false;
  };
  canPlayOpus = function(){
    return false;
  };
  function h(it){
    var id, res;
    id = CurrentId;
    if (/\uFFF9/.exec(it)) {
      it += '</span></span></span></span>';
    }
    res = it.replace(/[\uFF0E\u2022]/g, '\u00B7').replace(/\u223C/g, '\uFF0D').replace(/\u0358/g, '\u030d').replace(/(.)\u20DD/g, "<span class='regional part-of-speech'>$1</span> ").replace(/(.)\u20DE/g, "</span><span class='part-of-speech'>$1</span><span>").replace(/(.)\u20DF/g, "<span class='specific'>$1</span>").replace(/(.)\u20E3/g, "<span class='variant'>$1</span>").replace(RegExp('<a[^<]+>' + id + '<\\/a>', 'g'), id + "").replace(/<a>([^<]+)<\/a>/g, "<a href=\"" + h + "$1\">$1</a>").replace(RegExp('(>[^<]*)' + id + '(?!</(?:h1|rb)>)', 'g'), "$1<b>" + id + "</b>").replace(/\uFFF9/g, '<span class="ruby"><span class="rb"><span class="ruby"><span class="rb">').replace(/\uFFFA/g, '</span><br><span class="rt trs pinyin">').replace(/\uFFFB$/, '').replace(/\uFFFB/g, '</span></span></span></span><br><span class="rt mandarin">').replace(/<span class="rt mandarin">\s*<\//g, '</').replace(/(<span class="rt trs pinyin")>\s*([^<]+)/g, function(_, pre, trs){
      return "" + pre + " title=\"" + trs2bpmf('t', trs) + "\">" + trs;
    });
    return res;
  }
  untag = (function(it){
    return replace$.call(it, /<[^>]*>/g, '');
  });
  groupBy = function(prop, xs){
    var x, pre, y;
    if (xs.length <= 1) {
      return [xs];
    }
    x = xs.shift();
    x[prop] == null && (x[prop] = '');
    pre = [x];
    while (xs.length) {
      y = xs[0];
      y[prop] == null && (y[prop] = '');
      if (x[prop] !== y[prop]) {
        break;
      }
      pre.push(xs.shift());
    }
    if (!xs.length) {
      return [pre];
    }
    return [pre].concat(slice$.call(groupBy(prop, xs)));
  };
  function expandDef(def){
    return def.replace(/^\s*<(\d)>\s*([介代副助動名嘆形連]?)/, function(_, num, char){
      return String.fromCharCode(0x327F + parseInt(num)) + "" + (char ? char + "\u20DE" : '');
    }).replace(/<(\d)>/g, function(_, num){
      return String.fromCharCode(0x327F + parseInt(num));
    }).replace(/\{(\d)\}/g, function(_, num){
      return String.fromCharCode(0x2775 + parseInt(num));
    }).replace(/[（(](\d)[)）]/g, function(_, num){
      return String.fromCharCode(0x2789 + parseInt(num)) + ' ';
    }).replace(/\(/g, '（').replace(/\)/g, '）');
  }
  function intersperse(elm, xs){
    var list, i$, len$, x;
    list = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (list.length) {
        list.push(elm);
      }
      list.push(x);
    }
    return list;
  }
  Consonants = {
    p: 'ㄅ',
    b: 'ㆠ',
    ph: 'ㄆ',
    m: 'ㄇ',
    t: 'ㄉ',
    th: 'ㄊ',
    n: 'ㄋ',
    l: 'ㄌ',
    k: 'ㄍ',
    g: 'ㆣ',
    kh: 'ㄎ',
    ng: 'ㄫ',
    h: 'ㄏ',
    tsi: 'ㄐ',
    ji: 'ㆢ',
    tshi: 'ㄑ',
    si: 'ㄒ',
    ts: 'ㄗ',
    j: 'ㆡ',
    tsh: 'ㄘ',
    s: 'ㄙ'
  };
  Vowels = {
    a: 'ㄚ',
    an: 'ㄢ',
    ang: 'ㄤ',
    ann: 'ㆩ',
    oo: 'ㆦ',
    onn: 'ㆧ',
    o: 'ㄜ',
    e: 'ㆤ',
    enn: 'ㆥ',
    ai: 'ㄞ',
    ainn: 'ㆮ',
    au: 'ㄠ',
    aunn: 'ㆯ',
    am: 'ㆰ',
    om: 'ㆱ',
    m: 'ㆬ',
    ong: 'ㆲ',
    ng: 'ㆭ',
    i: 'ㄧ',
    inn: 'ㆪ',
    u: 'ㄨ',
    unn: 'ㆫ',
    ing: 'ㄧㄥ',
    'in': 'ㄧㄣ',
    un: 'ㄨㄣ'
  };
  Tones = {
    p: 'ㆴ',
    t: 'ㆵ',
    k: 'ㆶ',
    h: 'ㆷ',
    p$: "ㆴ\u0358",
    t$: "ㆵ\u0358",
    k$: "ㆶ\u0358",
    h$: "ㆷ\u0358",
    "\u0300": '˪',
    "\u0301": 'ˋ',
    "\u0302": 'ˊ',
    "\u0304": '˫',
    "\u030d": '$'
  };
  re = function(it){
    var k;
    return (function(){
      var results$ = [];
      for (k in it) {
        results$.push(k);
      }
      return results$;
    }()).sort(function(x, y){
      return y.length - x.length;
    }).join('|');
  };
  C = re(Consonants);
  V = re(Vowels);
  function trs2bpmf(LANG, trs){
    if (LANG === 'h') {
      return ' ';
    }
    if (LANG === 'a') {
      return trs;
    }
    return trs.replace(/[A-Za-z\u0300-\u030d]+/g, function(it){
      var tone;
      tone = '';
      it = it.toLowerCase();
      it = it.replace(/([\u0300-\u0302\u0304\u030d])/, function(it){
        tone = Tones[it];
        return '';
      });
      it = it.replace(/^(tsh?|[sj])i/, '$1ii');
      it = it.replace(/ok$/, 'ook');
      it = it.replace(RegExp('^(' + C + ')((?:' + V + ')+[ptkh]?)$'), function(){
        return Consonants[arguments[1]] + arguments[2];
      });
      it = it.replace(/[ptkh]$/, function(it){
        tone = Tones[it + tone];
        return '';
      });
      it = it.replace(RegExp('(' + V + ')', 'g'), function(it){
        return Vowels[it];
      });
      return it + (tone || '\uFFFD');
    }).replace(/[- ]/g, '').replace(/\uFFFD/g, ' ').replace(/\. ?/g, '。').replace(/\? ?/g, '？').replace(/\! ?/g, '！').replace(/\, ?/g, '，');
  }
  keyMap = {
    h: '"heteronyms"',
    b: '"bopomofo"',
    p: '"pinyin"',
    d: '"definitions"',
    c: '"stroke_count"',
    n: '"non_radical_stroke_count"',
    f: '"def"',
    t: '"title"',
    r: '"radical"',
    e: '"example"',
    l: '"link"',
    s: '"synonyms"',
    a: '"antonyms"',
    q: '"quote"',
    _: '"id"',
    '=': '"audio_id"',
    E: '"english"',
    T: '"trs"',
    A: '"alt"',
    V: '"vernacular"',
    C: '"combined"',
    D: '"dialects"',
    S: '"specific_to"'
  };
  decodeLangPart = function(LANG, part){
    var H;
    part == null && (part = '');
    while (/"`辨~\u20DE&nbsp`似~\u20DE"[^}]*},{"f":"([^（]+)[^"]*"/.exec(part)) {
      part = part.replace(/"`辨~\u20DE&nbsp`似~\u20DE"[^}]*},{"f":"([^（]+)[^"]*"/, '"辨\u20DE 似\u20DE $1"');
    }
    part = part.replace(/"`(.)~\u20DE"[^}]*},{"f":"([^（]+)[^"]*"/g, '"$1\u20DE $2"');
    part = part.replace(/"([hbpdcnftrelsaqETAVCDS_=])":/g, function(arg$, k){
      return keyMap[k] + ':';
    });
    H = HASHOF[LANG];
    part = part.replace(/([「【『（《])`([^~]+)~([。，、；：？！─…．·－」』》〉]+)/g, function(arg$, pre, word, post){
      return "<span class='punct'>" + pre + "<a href=\\\"" + H + word + "\\\">" + word + "</a>" + post + "</span>";
    });
    part = part.replace(/([「【『（《])`([^~]+)~/g, function(arg$, pre, word){
      return "<span class='punct'>" + pre + "<a href=\\\"" + H + word + "\\\">" + word + "</a></span>";
    });
    part = part.replace(/`([^~]+)~([。，、；：？！─…．·－」』》〉]+)/g, function(arg$, word, post){
      return "<span class='punct'><a href=\\\"" + H + word + "\\\">" + word + "</a>" + post + "</span>";
    });
    part = part.replace(/`([^~]+)~/g, function(arg$, word){
      return "<a href=\\\"" + H + word + "\\\">" + word + "</a>";
    });
    part = part.replace(/([)）])/g, "$1\u200B");
    return part;
  };
  if (typeof module != 'undefined' && module !== null) {
    if (typeof module != 'undefined' && module !== null) {
      module.exports = {
        Result: Result,
        decodeLangPart: decodeLangPart
      };
    }
  } else {
    $(function(){
      (React.View || (React.View = {})).Result = Result;
      React.View.result = React.renderComponent(Result(), $('#result')[0]);
      return React.View.decodeLangPart = decodeLangPart;
    });
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
