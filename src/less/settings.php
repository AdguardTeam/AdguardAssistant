<? include "header.php"; ?>




<div class="close"></div>


<div class="head">
    <div class="head_title">
        Настройка помощника
    </div>
    <div class="head_text">
        Настройте размер и положение помощника Adguard
    </div>
</div>



<div class="content">
    <div class="settings settings__horizontal">

        <div class="settings_fieldset">
            <div class="settings_fieldset_lbl">
                Размер иконки:
            </div>
            <div class="settings_fieldset_val">
                <div class="choice-size">
                    <div class="choice-size_group">
                        <div class="choice-size_field">
                            <input class="choice-size_input form-ui-control" id="size-small" type="radio" name="radio" checked>
                            <label class="form-ui" for="size-small">
                                <span class="form-ui-txt">
                                    Маленькая
                                </span>
                            </label>
                            <span class="choice-size_logo">
                                <span class="a-logo a-logo__small">
                                    <span class="logo"></span>
                                </span>
                            </span>
                        </div>
                        <div class="choice-size_field">
                            <input class="choice-size_input form-ui-control" id="size-big" type="radio" name="radio">
                            <label class="form-ui" for="size-big">
                                <span class="form-ui-txt">
                                    Большая
                                </span>
                            </label>
                            <span class="choice-size_logo">
                                <span class="a-logo">
                                    <span class="logo"></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="settings_fieldset">
            <div class="settings_fieldset_lbl settings_fieldset_lbl__pos">
                Расположение:
            </div>
            <div class="settings_fieldset_val">
                <div class="change-position">
                    <div class="change-position_i">
                        <input type="radio" name="position" class="change-position_input" id="position-top-left">
                        <label class="change-position_label" for="position-top-left">
                            <span class="s-position-arr-top-left"></span>
                        </label>
                        <div class="change-position_val">Вверху слева</div>
                    </div>
                    <div class="change-position_i">
                        <input type="radio" name="position" class="change-position_input" id="position-top-right">
                        <label class="change-position_label" for="position-top-right">
                            <span class="s-position-arr-top-right"></span>
                        </label>
                        <div class="change-position_val">Вверху справа</div>
                    </div>
                    <div class="change-position_i">
                        <input type="radio" name="position" class="change-position_input" id="position-bottom-left">
                        <label class="change-position_label" for="position-bottom-left">
                            <span class="s-position-arr-bottom-left"></span>
                        </label>
                        <div class="change-position_val">Внизу слева</div>
                    </div>
                    <div class="change-position_i">
                        <input type="radio" name="position" class="change-position_input" id="position-bottom-right" checked>
                        <label class="change-position_label" for="position-bottom-right">
                            <span class="s-position-arr-bottom-right"></span>
                        </label>
                        <div class="change-position_val">Внизу справа</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<div class="foot">
    <div class="foot_action">
        <div class="foot_action_btn">
            <button class="btn btn-default" type="button">Отмена</button>
            <button class="btn btn-primary" type="button">Сохранить настройки</button>
        </div>
    </div>
</div>




<? include "footer.php"; ?>
