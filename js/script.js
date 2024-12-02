var textDict = {
  부리_돌기: "부리",
  기본형_2350: "2,350자",
  확장형_2780: "2,780자",
  완성형_11172: "11,172자",
  고어_방언_딩벳: "한글 고어 지원",
  메뉴얼: "메뉴얼 지원",
  크게_쓸_때: "크게 쓸 때",
  작게_쓸_때: "작게 쓸 때",
};

var lTagA = [
  "가볍다",
  "무겁다",
  "자유롭다",
  "단정하다",
  "부드럽다",
  "딱딱하다",
];

var subTag = [
  "경쾌하다",
  "날카롭다",
  "여리다",
  "시원하다",
  "깔끔하다",
  "단아하다",
  "아기자기하다",
  "견고하다",
  "거칠다",
  "굳세다",
  "듬직하다",
  "넉넉하다",
  "수수하다",
  "투박하다",
];
var lTag2A = ["장식적이다", "발랄하다", "강하다", "고전적이다"];
var addFunction = [
  "크게_쓸_때",
  "작게_쓸_때",
  "기본형_2350",
  "확장형_2780",
  "완성형_11172",
];

var addSubFunction = [
  "자족",
  "부리_돌기",
  "세로쓰기",
  "메뉴얼",
  "손글씨",
  "다국어",
  "고어_방언_딩벳",
];

var fontSize = ["크게_쓸_떄", "작게_쓸_때"];
var fontCount = ["기본형", "확장형", "완성형"];

var selectedFonts = [];
$(document).ready(function () {
  // 이 안에 코드를 넣으면 됩니다
  console.log("정상작동 됩니다!");
  var font_html = "";
  $.each(font_data, function (i, d) {
    // 태그1

    var functionClass = "";

    var lTag = "";
    $.each(lTagA, function (j, e) {
      if (d[e] == "1") {
        lTag += `<div class="tag-item">${e}</div>`;
        functionClass += e + " ";
      }
    });

    var lTag2 = "";

    $.each(lTag2A, function (j, e) {
      if (d[e] == "1") {
        lTag2 += `<div class="tag-item round">${e}</div>`;
        functionClass += e + " ";
      }
    });
    // 태그2

    // 하위태그

    var afTag = "";
    $.each(addFunction, function (j, e) {
      if (d[e] == "1") {
        if (e == "크게_쓸_때") {
          afTag += `<div class="tag-item">크게 쓸 때</div>`;
          functionClass += e + " ";
        } else if (e == "작게_쓸_때") {
          afTag += `<div class="tag-item">작게 쓸 때</div>`;
          functionClass += e + " ";
        } else {
          afTag += `<div class="tag-item">${
            textDict[e] ? textDict[e] : e
          }</div>`;
          functionClass += e + " ";
        }
      }
    });

    var asfTag = "";
    $.each(addSubFunction, function (j, e) {
      if (d[e] == "1") {
        asfTag += `<div class="impression-item">${
          textDict[e] ? textDict[e] : e
        }</div>`;
        functionClass += e + " ";
      }
    });
    var sTag = "";
    $.each(subTag, function (j, e) {
      if (d[e] == "1") {
        sTag += `<div class="impression-item">${
          textDict[e] ? textDict[e] : e
        }</div>`;
        functionClass += e + " ";
      }
    });

    // var fsTag = "";
    // $.each(fontSize, function (j, e) {
    //   if (d[e] == "1") {
    //     fsTag += `<div class="tag-item">${e}</div>`;
    //     functionClass += e + " ";
    //   }
    // });

    // var fcTag = "";
    // $.each(fontCount, function (j, e) {
    //   if (d[e] == "1") {
    //     fcTag += `<div class="tag-item">${e}</div>`;
    //     functionClass += e + " ";
    //   }
    // });

    html = ` <div class="grid-item ${functionClass}" style="order:${parseInt(
      Math.random() * 300
    )}; display:flex;">
            <div class="font-info"> 
              <div class="font-name">${d.이름}</div>
              <div clsas="font-region">
                ${d.제작_지역_기관}
                <span class="font-year">${d.제작_년도}</span>
              </div>
            </div>
            <div class="dummy-text" style="font-family:${
              d.글립스_서체_이름
            }">마지막 햇볕이 내리<br> 쬐는 늦은 오후</div>
            <div class="font-sample" style="font-family:${
              d.글립스_서체_이름
            }">마지막 햇볕이 내리 쬐는 늦은 오후 바람을 쐬러 나섰다. 머릿속은 애달피 하소연하던 할머니를 모르쇠로 일관했던 것을 되뇌었다. 회색 도시 하늘에 낮게 내려앉은 주홍색 노을은 검푸른 아스팔트보다 짙고, 뜨겁게 달궈진 공기는 숨을 막는다.
              </div>
            <div class="font-desc">${d.서체_설명}</div>
            <div class="font-function">
              <div class="font-add" id="${i}" se="false">
                <img src="img/plus.png">
              </div>
             
            </div>

            <div class="web-container">
              <div class="font-web ${d.웹사이트_링크 ? "is" : "no"}"><a href="${
      d.웹사이트_링크
    }">Website</a></div>
              <div class="font-web ${d.메뉴얼_직링크 ? "is" : "no"}"><a href="${
      d.메뉴얼_직링크
    }">Manual PDF</a></div>
            </div>
            <div style="display:flex; justify-content:space-between;width:100%;align-items:flex-end">
              <div class="font-tag" style="flex:1">
                <div class="tag-container">
                  ${lTag}
                </div>
                <div class="tag-container">
                  ${lTag2}
                </div>
                <div class="font-impression">
                ${sTag}
                </div>
              </div>
              <div class="font-tag" style="flex:1">
                <div class="tag-container sub">
                  ${afTag}
                </div>
                <div class="font-impression">
                  ${asfTag}
                </div>
              </div>
            </div>
          </div>`;
    $(".grid-container").append(html);
  });
  checkImp();
});

$(document).ready(function () {
  $(".grid-item").on("click", function () {
    $(".grid-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".font-add").on("click", function () {
    event.stopPropagation();
    var ids = $(this).attr("id");
    if ($(this).attr("se") == "false") {
      $(this).css("transform", "rotate(45deg)");
      $(this).attr("se", "true");
      selectedFonts.push(ids);
    } else {
      const index = selectedFonts.indexOf(ids);
      // console.log(index);
      if (index !== -1) {
        selectedFonts.splice(index, 1); // 해당 인덱스에서 1개 요소 제거
      }
      $(this).css("transform", "rotate(0deg)");
      $(this).attr("se", "false");
    }

    $(".se-fonts").html(`추가한 서체 모아보기 + ${selectedFonts.length}`);
    $(".no-fonts").css("display", "none");
  });

  $(".se-fonts").on("click", function () {
    var listHtml = "";
    $.each(selectedFonts, function (i, z) {
      var d = font_data[parseInt(z)];
      var functionClass = "";

      var lTag = "";
      $.each(lTagA, function (j, e) {
        if (d[e] == "1") {
          lTag += `<div class="tag-item">${e}</div>`;
          functionClass += e + " ";
        }
      });

      var lTag2 = "";

      $.each(lTag2A, function (j, e) {
        if (d[e] == "1") {
          lTag2 += `<div class="tag-item round">${e}</div>`;
          functionClass += e + " ";
        }
      });
      // 태그2

      // 하위태그

      var afTag = "";
      $.each(addFunction, function (j, e) {
        if (d[e] == "1") {
          if (e == "크게_쓸_때") {
            afTag += `<div class="tag-item">크게 쓸 때</div>`;
            functionClass += e + " ";
          } else if (e == "작게_쓸_때") {
            afTag += `<div class="tag-item">작게 쓸 때</div>`;
            functionClass += e + " ";
          } else {
            afTag += `<div class="tag-item">${e}</div>`;
            functionClass += e + " ";
          }
        }
      });

      var asfTag = "";
      $.each(addSubFunction, function (j, e) {
        if (d[e] == "1") {
          asfTag += `<div class="impression-item">${e}</div>`;
          functionClass += e + " ";
        }
      });
      var sTag = "";
      $.each(subTag, function (j, e) {
        if (d[e] == "1") {
          sTag += `<div class="impression-item">${e}</div>`;
          functionClass += e + " ";
        }
      });

      listHtml += `
      <div class="grid-item">
        <div class="header" style="display:flex;justify-content:space-between">
          <div class="font-info" style="flex:1"> 
            <div class="font-name">${d.이름}</div>
            <div clsas="font-region">
              ${d.제작_지역_기관}
              <span class="font-year">${d.제작_년도}</span>
            </div>
          </div>
          <div class="font-tags" style="display:flex;flex:1;">
            <div class="font-tag" style="flex:1">
              <div class="tag-container">
                ${lTag}
              </div>
              <div class="tag-container">
                ${lTag2}
              </div>
              <div class="font-impression">
              ${sTag}
              </div>
            </div>
            <div class="font-tag" style="flex:1">
              <div class="tag-container sub">
                ${afTag}
              </div>
              <div class="font-impression">
                ${asfTag}
              </div>
            </div>
          </div>
        </div>
        <div class="font-sample" style="max-width:inherit; font-size:72px;font-family:${d.글립스_서체_이름}">마지막 햇볕이 내리 쬐는 늦은 오후 바람</div>
      </div>
      `;
    });
    $(".list-container").html(listHtml);

    $(".se-font-wrapper").css("display", "flex");
    $(".content-wrapper").css("display", "none");
  });
});

$(document).ready(function () {
  $(".radio-button-container").on("click", ".button", function () {
    if ($(this).attr("active") == "false") {
      $(this).siblings(".button").attr("active", false);
      $(this).siblings(".button").removeClass("active");

      $(this).addClass("active");
      $(this).attr("active", true);
      checkImp();
    } else {
      $(this).siblings(".button").attr("active", false);
      $(this).siblings(".button").removeClass("active");
      $(this).removeClass("active");
      $(this).attr("active", false);
      checkImp();
    }
  });
  $(".round-button-container").on("click", ".button", function () {
    if ($(this).attr("active") == "true") {
      $(this).removeClass("active");
      $(this).attr("active", false);
      checkImp();
    } else {
      $(this).addClass("active");
      $(this).attr("active", true);
      checkImp();
    }
  });

  $(".check-box-conttainer.addt input[type='checkbox']").on(
    "change",
    function () {
      if ($(this).is(":checked")) {
        $(this).val("checked");
        checkImp();
      } else {
        $(this).val("unchecked");
        checkImp();
      }
    }
  );
  $(".function-radio-box").on("click", ".function-radio-item", function () {
    if ($(this).attr("active") == "true") {
      $(this).removeClass("active");
      $(this).attr("active", false);
      checkImp();
    } else {
      $(this).addClass("active");
      $(this).attr("active", true);
      checkImp();
    }
  });

  $(".addf-check").on("change", function () {
    if ($(this).is(":checked")) {
      $(this).val("checked");
      checkImp();
    } else {
      $(this).val("unchecked");
      checkImp();
    }
  });
});

var functionT = "";
var classT = "";
function checkImp() {
  var arrayT = [];
  var arrayF = [];
  var mainT = [];
  functionT = "";
  classT = "";
  var d = $(".radio-button-container .button");
  $.each(d, function (i, d) {
    var t = $(d).attr("active");
    if (t == "true") {
      arrayT.push($(d).attr("value"));
      functionT += $(d).attr("value") + " ";
      classT += "." + $(d).attr("value");
    }
  });

  var d = $(".round-button-container .button");
  $.each(d, function (i, d) {
    var t = $(d).attr("active");
    if (t == "true") {
      arrayT.push($(d).attr("value"));
      functionT += $(d).attr("value") + " ";
      classT += "." + $(d).attr("value");
    }
  });

  var d = $(".imp-check");
  $.each(d, function (i, d) {
    if ($(d).is(":checked")) {
      arrayT.push($(d).attr("t"));
      functionT += $(d).attr("value") + " ";
      classT += "." + $(d).attr("t");
    }
  });

  var d = $(".addf-check");
  var functionClass = [];
  $.each(d, function (i, d) {
    if ($(d).is(":checked")) {
      arrayF.push($(d).attr("t"));
      functionT += $(d).attr("value") + " ";
      console.log($(d).attr("t"));
      functionClass.push("." + $(d).attr("t"));
    }
  });
  console.log(arrayF);

  var d = $(".font-size-box .function-radio-item");
  $.each(d, function (i, d) {
    var t = $(d).attr("active");
    if (t == "true") {
      arrayF.push($(d).attr("value"));
      // arrayT.push($(d).attr("value"));
      functionT += $(d).attr("value") + " ";
      functionClass.push("." + $(d).attr("value"));
    }
  });

  var d = $(".font-count-box .function-radio-item");
  $.each(d, function (i, d) {
    var t = $(d).attr("active");
    if (t == "true") {
      arrayF.push($(d).attr("value"));
      // arrayT.push($(d).attr("value"));
      functionT += $(d).attr("value") + " ";
      functionClass.push("." + $(d).attr("value"));
    }
  });

  $(".grid-item").css("display", "none");
  $.each(functionClass, function (i, d) {
    $(classT + d).css("display", "flex");
  });
  // 모든 grid-item의 display 상태 확인

  // console.log(arrayF, arrayT);
  displayImp(arrayT, arrayF);
}

function displayImp(d, e) {
  var tagHtml = "";
  var functionTagHtml = "";
  var mainT = [];
  $.each(d, function (i, d) {
    $.each(lTagA, function (j, e) {
      if (d == e) {
        mainT.push(e);
        tagHtml += `
        <div class="tag-item">${e}</div>
        `;
      }
    });
    $.each(lTag2A, function (j, e) {
      if (d == e) {
        mainT.push(e);
        tagHtml += `
        <div class="tag-item round">${e}</div>
        `;
      }
    });
    $.each(subTag, function (j, e) {
      if (d == e) {
        tagHtml += `
        <div class="tag-item imp">${e}</div>
        `;
      }
    });
  });
  $.each(e, function (j, id) {
    $.each(addFunction, function (k, f) {
      if (id == f) {
        functionTagHtml += `
      <div class="tag-item">${textDict[f] ? textDict[f] : f}</div>
      `;
      }
    });
    $.each(addSubFunction, function (k, f) {
      if (id == f) {
        functionTagHtml += `
      <div class="tag-item">${textDict[f] ? textDict[f] : f}</div>
      `;
      }
    });
  });

  $(".tag-bar").html(tagHtml);
  if (tagHtml == "") {
    $(".tag-bar").html(
      `<div class="no-item-text">좌측 탭에서 인상어를 선택해주세요</div>`
    );
  }
  $(".function-tag-bar").html(functionTagHtml);
  if (functionTagHtml == "") {
    $(".function-tag-bar").html(
      `<div class="no-item-text" style="color:#666;font-size:14px;">좌측 탭에서 기능요소를 선택해주세요</div>`
    );
  }
  console.log(mainT);
  var pr = [];
  $.each(font_data, function (i, d) {
    var isOkay = false;
    $.each(mainT, function (j, e) {
      if (d[e] == "0") {
        isOkay = true;
      }
    });
    if (!isOkay) {
      $.each(subTag, function (i, e) {
        if (d[e] == "1") {
          pr.push(e);
        }
      });
    }
  });
  const uniqueArr = [...new Set(pr)];
  console.log(uniqueArr); // 출력: ["1", "2", "3"]
  $(".addt .check-box-item").css("display", "none");
  $.each(uniqueArr, function (i, d) {
    $(`.check-box-item.${d}`).css("display", "flex");
  });
  const visibleItems = $(".grid-item").filter(function () {
    return $(this).css("display") !== "none";
  });

  // 만약 visibleItems가 비어 있다면 "아무것도 없음" div를 추가
  if (visibleItems.length == 0) {
    $(".grid-container .no-item").css("display", "flex");
  } else {
    $(".grid-container .no-item").css("display", "none");
  }
}
