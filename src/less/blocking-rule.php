<? include "header.php"; ?>




<div class="close"></div>


<div class="head">
    <div class="head_title">
        Блокировка элемента
    </div>
    <div class="head_text">
        Настройте правило блокирования элемента
    </div>
</div>



<div class="content">


    <div class="element-rule">
        <div class="element-rule_text">
            Перемещайте бегунок, чтобы изменить размер блока, для которого будет действовать правило:
        </div>



        <div class="element-rule_slider">

            <div id="slider" class="adg-slide ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                <div id="SliderMaxText" class="adg-slide-clue-min">Меньше</div>
                <div id="SliderMinText" class="adg-slide-clue-max">Больше</div>

                <div class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style="width: 50%;"></div>

                <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 50%;"></a>

                <div class="tick ui-widget-content" style="left: 0; width: 16.6667%; background-color: #36ba53;"></div>
                <div class="tick ui-widget-content" style="left: 16.6667%; width: 16.6667%; background-color: #36ba53;"></div>
                <div class="tick ui-widget-content" style="left: 33.3333%; width: 16.6667%; background-color: #36ba53;"></div>
                <div class="tick ui-widget-content" style="left: 50%; width: 16.6667%; background-color: #e0dfdb;"></div>
                <div class="tick ui-widget-content" style="left: 66.6667%; width: 16.6667%; background-color: #e0dfdb;"></div>
                <div class="tick ui-widget-content" style="left: 83.3333%; width: 16.6667%; background-color: #e0dfdb;"></div>
            </div>

        </div>



        <div class="element-rule_more">
            <span class="element-rule_expand-link js-rule-form-expand">
                <span class="element-rule_expand-link_txt">Расширенные настройки</span>
                <span class="element-rule_expand-link_arr"></span>
            </span>
        </div>


        <div class="element-rule_form js-rule-form">
            <div class="element-rule_form-cont">
                <div class="element-rule_fieldset">
                    <input class="form-ui-control" id="rule-for-all" type="checkbox" checked>
                    <label class="form-ui" for="rule-for-all">
                        <span class="form-ui-txt">
                            Применить правила для всех сайтов
                        </span>
                    </label>
                </div>

                <div class="element-rule_fieldset">
                    <input class="form-ui-control" id="rule-for-link" type="checkbox">
                    <label class="form-ui" for="rule-for-link">
                        <span class="form-ui-txt">
                            Блокировать по ссылке
                        </span>
                    </label>
                </div>

                <div class="element-rule_fieldset">
                    <input type="text" class="form-control" value="rutracker.org###page_container > DIV.top-alert.ta-inf2:nth-child(4)">
                </div>
            </div>
        </div>


        <script>
            var expandLink = document.querySelectorAll('.js-rule-form-expand')[0];
            var ruleForm = document.querySelectorAll('.js-rule-form')[0];

            expandLink.addEventListener('click', function () {
                expandLink.classList.toggle('active');
                ruleForm.classList.toggle('open');
            });
        </script>

    </div>

</div>



<div class="foot">
    <button class="btn btn-default" type="button">Выбрать другой элемент</button>

    <div class="foot_action">
        <div class="foot_action_btn">
            <button class="btn btn-primary" type="button">Предпросмотр</button>
            <button class="btn btn-cancel" type="button">Заблокировать</button>
        </div>
    </div>
</div>




<? include "footer.php"; ?>
