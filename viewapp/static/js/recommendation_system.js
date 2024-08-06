
/**
 * Created by Daidv on 9/14/21.
 * Copyright: ©2022 Daidv <duongdaiuet@gmail.com>
 * App: DaiDVTest
 */

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getCSRFTokenValue(){
    return getCookie('csrftoken');
}
function getSessionIdValue(){
    return getCookie('sessionid');
}

function makeid(length=24) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}

function genInteger(length=4) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}

function randomDate(start=new Date(2020, 0, 1), end=new Date(), startHour=0, endHour=24) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

// UUIDv4 Generator
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Boolean Gemerator
function genBoolean(){
    var random_boolean = Math.random() < 0.5;
    return random_boolean;
}

// Get random select from option by ID:
function UserDaiDVTestgenRandomSelect(optionId){
    try{
        var select = document.getElementById(optionId);
        if(select == null){
            return null;
        }
        var items = select.getElementsByTagName('option');
        var vals = [];
        for (var i = 0; i < items.length; i++){
            if (items[i].hasAttribute("value") && items[i].value != null){
                vals.push(items[i].value);
            }
        }
        console.log('vals = ', vals);

        var index = vals[Math.floor(Math.random() * items.length)];
        //select.value = index;

        // Fill file label:
        //var labels = document.querySelectorAll('[for=optionId]');
        //for (var i = 0; i < labels.length; i++){
        //   labels[i].val(index);
        //}
        //$("#"+optionId).val(index).change()
        var obj = new Object();
        obj.uuid = index;
        return obj;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

var genUserDaiDVTest_FIELDS = [
            "uuid",
            "avatar",
            "name",
            "username",
            "gender",
            "year_of_bird",
            "phone",
            "email",
            "foreign_language",
            "is_administrators",
            "is_deleted",
            "desc",
            "last_login_at",
            "created_by",
            "updated_by",
            "updated_at",
            "created_at",
    ];
function genUserDaiDVTest(form_type){
    return {
        "uuid": uuidv4(),
        "avatar": null,
        "name": makeid(),
        "username": makeid(),
        "gender": makeid(),
        "year_of_bird": makeid(),
        "phone": makeid(),
        "email": makeid(),
        "foreign_language": makeid(),
        "is_administrators": genBoolean(),
        "is_deleted": genBoolean(),
        "desc": makeid(),
        "last_login_at": randomDate(),
        "created_by": UserDaiDVTestgenRandomSelect('created_byAccountUserDaiDVTest'+form_type+'InputId'),
        "updated_by": UserDaiDVTestgenRandomSelect('updated_byAccountUserDaiDVTest'+form_type+'InputId'),
        "updated_at": randomDate(),
        "created_at": randomDate(),
    }
}

var UserDaiDVTest_CACHE = [];

           var UserDaiDVTest_arr_action = [
        // default action

                    {
                    "title": "Xem chi tiết",
                    "func": "UserDaiDVTestDetails",
                    "icon": "far fa-eye",
                    "href": "#",
                    "isCheck": false,
                    "allowSelfChecking": true,
                    "field_checking": "#",
                    "value_is_true": "#",
                    "views_name": "",
                    "independent_views": true
                    },

        // custom action

    ]
    // default func actions

                    function UserDaiDVTestDetails(uuid){
                        $('#userDaiDVTestDetailmodalsId').modal('toggle');
                        var obj=new UserDaiDVTest();
                        obj.tGetObjApi(uuid);
                        obj.callAjax.then(function(data) {
                            new UserDaiDVTest(data).tFillFormModal('Detail','userDaiDVTestDetailModalsFormId');

                        })
                        //obj.tFillFormModal('Detail');

                    }

                    function UserDaiDVTestViewDetail(selectionId){
                        var select = $("#"+selectionId);
                        if(select.length>0){
                            var value =  select.val()
                            if(value == "" || value == null || value == undefined){
                                toastr.warning('Vui lòng chọn giá trị');
                                return;
                            }
                            else {
                                $('#userDaiDVTestDetailmodalsId').modal('toggle');
                                var obj=new UserDaiDVTest();
                                obj.tGetObjApi(value);
                                obj.callAjax.then(function(data) {
                                    new UserDaiDVTest(data).tFillFormModal('Detail','userDaiDVTestDetailModalsFormId');
                                })
                            }
                        }


                    }

    // custom func actions



                    //########## [Event] ChangeSwitcher ##############

                    function is_administratorsuserDaiDVTestEventChangeSwitcher($this){
                            var status="";
                            var name = "Thuộc quản trị viên";
                            if ($($this).is(":checked")) {
                                status = name;
                                console.log($($this).attr("data-uuid")+": Check box in Checked");
                            } else {
                                status="không " + name;
                                console.log($($this).attr("data-uuid")+": Check box is Unchecked");
                            }
                            $.confirm({
                            icon: 'fa fa-warning',
                            title: 'Trạng thái',
                            content: 'Bạn có chắc thay đổi sang <b>'+status+'</b> ?',
                            theme: 'modern',
                            closeIcon: 'cancel',
                            animation: 'scale',
                            type: 'green',
                            buttons: {
                                cancel: {
                                    text: 'Hủy',
                                    action:function(){
                                        //tra lai trang thai ban dau

                                    $($this).prop('checked', !$($this).is(":checked"));

                                    }
                                },
                                confirm: {
                                    text: 'Đồng ý',
                                    btnClass: 'btn-green',
                                    action: function() {
                                        //noi dung xoa
                                        obj = new UserDaiDVTest();
                                        console.log('Update obj = ', obj);
                                        obj.tUpdateOnlyFieldApi($($this).attr("data-uuid"),$($this).attr("name"),$($this).is(":checked"))  ;
                                    }
                                },

                            }
                        })

                    }

                    //########## [Event] ChangeSwitcher ##############

                    function is_deleteduserDaiDVTestEventChangeSwitcher($this){
                            var status="";
                            var name = "trạng thái xóa";
                            if ($($this).is(":checked")) {
                                status = name;
                                console.log($($this).attr("data-uuid")+": Check box in Checked");
                            } else {
                                status="không " + name;
                                console.log($($this).attr("data-uuid")+": Check box is Unchecked");
                            }
                            $.confirm({
                            icon: 'fa fa-warning',
                            title: 'Trạng thái',
                            content: 'Bạn có chắc thay đổi sang <b>'+status+'</b> ?',
                            theme: 'modern',
                            closeIcon: 'cancel',
                            animation: 'scale',
                            type: 'green',
                            buttons: {
                                cancel: {
                                    text: 'Hủy',
                                    action:function(){
                                        //tra lai trang thai ban dau

                                    $($this).prop('checked', !$($this).is(":checked"));

                                    }
                                },
                                confirm: {
                                    text: 'Đồng ý',
                                    btnClass: 'btn-green',
                                    action: function() {
                                        //noi dung xoa
                                        obj = new UserDaiDVTest();
                                        console.log('Update obj = ', obj);
                                        obj.tUpdateOnlyFieldApi($($this).attr("data-uuid"),$($this).attr("name"),$($this).is(":checked"))  ;
                                    }
                                },

                            }
                        })

                    }


                    //########## [Event] DeletedAttacthment ##############

                    function avataruserDaiDVTestDeletedAttacthment($this){
                        console.log($($this).attr("file-uuid")+": Attachment deleting");
                        $.confirm({
                            icon: 'fa fa-warning',
                            title: 'XÓA!',
                            content: 'Bạn có chắc muốn xóa ?!',
                            theme: 'modern',
                            closeIcon: 'cancel',
                            animation: 'scale',
                            type: 'red',
                            buttons: {
                                cancel: {
                                    text: 'Hủy',
                                },
                                confirm: {
                                    text: 'Đồng ý',
                                    btnClass: 'btn-blue',
                                    action: function() {
                                        //noi dung xoa
                                        $("#"+$($this).attr("file-uuid")+"AttachmentDivId").hide();
                                        obj = new UserDaiDVTest();
                                        console.log('Update obj = ', obj);
                                        obj.tDeleteFileApi($($this).attr("file-uuid"),"avatar");
                                    }
                                },

                            }
                        })

                    }

                    //########## [Event] InlineDeletedAttacthment ##############

                    function avataruserDaiDVTestInlineDeletedAttacthment($this){
                        console.log($($this).attr("file-uuid")+": Attachment deleting");
                        $.confirm({
                            icon: 'fa fa-warning',
                            title: 'XÓA!',
                            content: 'Bạn có chắc muốn xóa ?!',
                            theme: 'modern',
                            closeIcon: 'cancel',
                            animation: 'scale',
                            type: 'red',
                            buttons: {
                                cancel: {
                                    text: 'Hủy',
                                },
                                confirm: {
                                    text: 'Đồng ý',
                                    btnClass: 'btn-blue',
                                    action: function() {
                                        //noi dung xoa
                                        $("#"+$($this).attr("file-uuid")+"AttachmentDivId").hide();
                                        obj = new UserDaiDVTest();
                                        console.log('Update obj = ', obj);
                                        obj.tDeleteFileApi($($this).attr("file-uuid"),"avatar");
                                        $($this).closest("td").find("[name=file]").show();
                                    }
                                },

                            }
                        })

                    }

class UserDaiDVTest{
    // ########## Init Objects ##############
    constructor(data=null){
        if (data != null){
            if (data.hasOwnProperty('id')){
                this.id = data.id;
            }
            else{
                this.id = null;
            }

            this.__app_name__ = "DaiDVTest";

            this.__model_name__ = "User";

            if (data.hasOwnProperty('uuid')){
                this.uuid = data.uuid;
                this.editUrl = '/DaiDVTest/User/edit/' + this.uuid + '/';
                this.detailUrl = '/DaiDVTest/User/detail/' + this.uuid + '/';
            }
            else{
                // this.uuid = null;
            }

            if (data.hasOwnProperty('avatar')){
                this.avatar = data.avatar;
            }
            else{
                // this.avatar = null;
            }

            if (data.hasOwnProperty('name')){
                this.name = data.name;
            }
            else{
                // this.name = null;
            }

            if (data.hasOwnProperty('username')){
                this.username = data.username;
            }
            else{
                // this.username = null;
            }

            if (data.hasOwnProperty('gender')){
                this.gender = data.gender;
            }
            else{
                // this.gender = null;
            }

            if (data.hasOwnProperty('year_of_bird')){
                this.year_of_bird = data.year_of_bird;
            }
            else{
                // this.year_of_bird = null;
            }

            if (data.hasOwnProperty('phone')){
                this.phone = data.phone;
            }
            else{
                // this.phone = null;
            }

            if (data.hasOwnProperty('email')){
                this.email = data.email;
            }
            else{
                // this.email = null;
            }

            if (data.hasOwnProperty('foreign_language')){
                this.foreign_language = data.foreign_language;
            }
            else{
                // this.foreign_language = null;
            }

            if (data.hasOwnProperty('is_administrators')){
                this.is_administrators = data.is_administrators;
            }
            else{
                // this.is_administrators = null;
            }

            if (data.hasOwnProperty('is_deleted')){
                this.is_deleted = data.is_deleted;
            }
            else{
                // this.is_deleted = null;
            }

            if (data.hasOwnProperty('desc')){
                this.desc = data.desc;
            }
            else{
                // this.desc = null;
            }

            if (data.hasOwnProperty('last_login_at')){
                this.last_login_at = data.last_login_at;
            }
            else{
                // this.last_login_at = null;
            }

            if (data.hasOwnProperty('created_by')){
                this.created_by = data.created_by;
            }
            else{
                // this.created_by = null;
            }

            if (data.hasOwnProperty('updated_by')){
                this.updated_by = data.updated_by;
            }
            else{
                // this.updated_by = null;
            }

            if (data.hasOwnProperty('updated_at')){
                this.updated_at = data.updated_at;
            }
            else{
                // this.updated_at = null;
            }

            if (data.hasOwnProperty('created_at')){
                this.created_at = data.created_at;
            }
            else{
                // this.created_at = null;
            }

        }
    }
    tGetFormData(formId=null){
        var formEle = $("#" + formId);
        if (formEle.length > 0){
            var chEle = formEle.find("#uuidUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.uuid = chEle.val();
            }
            else{
                // this.uuid = null;
            }
            var chEle = formEle.find("#avatarUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.avatar = chEle.val();
            }
            else{
                // this.avatar = null;
            }
            var chEle = formEle.find("#nameUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.name = chEle.val();
            }
            else{
                // this.name = null;
            }
            var chEle = formEle.find("#usernameUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.username = chEle.val();
            }
            else{
                // this.username = null;
            }
            var chEle = formEle.find("#genderUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.gender = chEle.val();
            }
            else{
                // this.gender = null;
            }
            var chEle = formEle.find("#year_of_birdUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.year_of_bird = chEle.val();
            }
            else{
                // this.year_of_bird = null;
            }
            var chEle = formEle.find("#phoneUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.phone = chEle.val();
            }
            else{
                // this.phone = null;
            }
            var chEle = formEle.find("#emailUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.email = chEle.val();
            }
            else{
                // this.email = null;
            }
            var chEle = formEle.find("#foreign_languageUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.foreign_language = chEle.val();
            }
            else{
                // this.foreign_language = null;
            }
            var chEle = formEle.find("#is_administratorsUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.is_administrators = chEle.val();
            }
            else{
                // this.is_administrators = null;
            }
            var chEle = formEle.find("#is_deletedUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.is_deleted = chEle.val();
            }
            else{
                // this.is_deleted = null;
            }
            var chEle = formEle.find("#descUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.desc = chEle.val();
            }
            else{
                // this.desc = null;
            }
            var chEle = formEle.find("#last_login_atUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.last_login_at = chEle.val();
            }
            else{
                // this.last_login_at = null;
            }
            var chEle = formEle.find("#created_byUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.created_by = chEle.val();
            }
            else{
                // this.created_by = null;
            }
            var chEle = formEle.find("#updated_byUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.updated_by = chEle.val();
            }
            else{
                // this.updated_by = null;
            }
            var chEle = formEle.find("#updated_atUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.updated_at = chEle.val();
            }
            else{
                // this.updated_at = null;
            }
            var chEle = formEle.find("#created_atUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.created_at = chEle.val();
            }
            else{
                // this.created_at = null;
            }
        }
        else{
            var chEle = $("#idUserDaiDVTestInputId");
            if (chEle.length > 0){
                this.id = chEle.val();
            }
            else{
                // this.id = null;
            }
                                var chEle = $("#uuidUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.uuid = chEle.val();
                                }
                                else{
                                    // this.uuid = null;
                                }

                                var chEle = $("#avatarUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.avatar = chEle.val();
                                }
                                else{
                                    // this.avatar = null;
                                }

                                var chEle = $("#nameUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.name = chEle.val();
                                }
                                else{
                                    // this.name = null;
                                }

                                var chEle = $("#usernameUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.username = chEle.val();
                                }
                                else{
                                    // this.username = null;
                                }

                                var chEle = $("#genderUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.gender = chEle.val();
                                }
                                else{
                                    // this.gender = null;
                                }

                                var chEle = $("#year_of_birdUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.year_of_bird = chEle.val();
                                }
                                else{
                                    // this.year_of_bird = null;
                                }

                                var chEle = $("#phoneUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.phone = chEle.val();
                                }
                                else{
                                    // this.phone = null;
                                }

                                var chEle = $("#emailUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.email = chEle.val();
                                }
                                else{
                                    // this.email = null;
                                }

                                var chEle = $("#foreign_languageUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.foreign_language = chEle.val();
                                }
                                else{
                                    // this.foreign_language = null;
                                }

                                var chEle = $("#is_administratorsUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.is_administrators = chEle.val();
                                }
                                else{
                                    // this.is_administrators = null;
                                }

                                var chEle = $("#is_deletedUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.is_deleted = chEle.val();
                                }
                                else{
                                    // this.is_deleted = null;
                                }

                                var chEle = $("#descUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.desc = chEle.val();
                                }
                                else{
                                    // this.desc = null;
                                }

                                var chEle = $("#last_login_atUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    var date = moment(chEle.val(), 'DD/MM/YYYY');
                                    this.last_login_at=toDatePython(new Date(date))
                                }
                                else{
                                    // this.last_login_at = null;
                                }

                                var chEle = $("#created_byUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.created_by = chEle.val();
                                }
                                else{
                                    // this.created_by = null;
                                }

                                var chEle = $("#updated_byUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    this.updated_by = chEle.val();
                                }
                                else{
                                    // this.updated_by = null;
                                }

                                var chEle = $("#updated_atUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    var date = moment(chEle.val(), 'DD/MM/YYYY');
                                    this.updated_at=toDatePython(new Date(date))
                                }
                                else{
                                    // this.updated_at = null;
                                }

                                var chEle = $("#created_atUserDaiDVTestInputId");
                                if (chEle.length > 0){
                                    var date = moment(chEle.val(), 'DD/MM/YYYY');
                                    this.created_at=toDatePython(new Date(date))
                                }
                                else{
                                    // this.created_at = null;
                                }

        }
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillForm(){
        var self = this;

            try{
                var j_ele_uuid = $("#uuidUserDaiDVTestInputId");
                if (j_ele_uuid.length > 0){
                    if (j_ele_uuid.attr('name') == 'uuid'){
                        j_ele_uuid.val(self.uuid).change();
                    }
                }
                else{
                    // j_ele_uuid.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_avatar = $("#avatarUserDaiDVTestInputId");
                if (j_ele_avatar.length > 0){
                    if (j_ele_avatar.attr('name') != 'uuid'){
                        j_ele_avatar.val(self.avatar).change();
                    }
                }
                else{
                    // j_ele_avatar.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_name = $("#nameUserDaiDVTestInputId");
                if (j_ele_name.length > 0){
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.val(self.name).change();
                    }
                }
                else{
                    // j_ele_name.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_username = $("#usernameUserDaiDVTestInputId");
                if (j_ele_username.length > 0){
                    if (j_ele_username.attr('name') != 'uuid'){
                        j_ele_username.val(self.username).change();
                    }
                }
                else{
                    // j_ele_username.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_gender = $("#genderUserDaiDVTestInputId");
                if (j_ele_gender.length > 0){
                    if (j_ele_gender.attr('name') != 'uuid'){
                        j_ele_gender.val(self.gender).change();
                    }
                }
                else{
                    // j_ele_gender.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_year_of_bird = $("#year_of_birdUserDaiDVTestInputId");
                if (j_ele_year_of_bird.length > 0){
                    if (j_ele_year_of_bird.attr('name') != 'uuid'){
                        j_ele_year_of_bird.val(self.year_of_bird).change();
                    }
                }
                else{
                    // j_ele_year_of_bird.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_phone = $("#phoneUserDaiDVTestInputId");
                if (j_ele_phone.length > 0){
                    if (j_ele_phone.attr('name') != 'uuid'){
                        j_ele_phone.val(self.phone).change();
                    }
                }
                else{
                    // j_ele_phone.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_email = $("#emailUserDaiDVTestInputId");
                if (j_ele_email.length > 0){
                    if (j_ele_email.attr('name') != 'uuid'){
                        j_ele_email.val(self.email).change();
                    }
                }
                else{
                    // j_ele_email.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_foreign_language = $("#foreign_languageUserDaiDVTestInputId");
                if (j_ele_foreign_language.length > 0){
                    if (j_ele_foreign_language.attr('name') != 'uuid'){
                        j_ele_foreign_language.val(self.foreign_language).change();
                    }
                }
                else{
                    // j_ele_foreign_language.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_is_administrators = $("#is_administratorsUserDaiDVTestInputId");
                if (j_ele_is_administrators.length > 0){
                    if (j_ele_is_administrators.attr('name') != 'uuid'){
                        j_ele_is_administrators.val(self.is_administrators).change();
                    }
                }
                else{
                    // j_ele_is_administrators.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_is_deleted = $("#is_deletedUserDaiDVTestInputId");
                if (j_ele_is_deleted.length > 0){
                    if (j_ele_is_deleted.attr('name') != 'uuid'){
                        j_ele_is_deleted.val(self.is_deleted).change();
                    }
                }
                else{
                    // j_ele_is_deleted.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_desc = $("#descUserDaiDVTestInputId");
                if (j_ele_desc.length > 0){
                    if (j_ele_desc.attr('name') != 'uuid'){
                        j_ele_desc.val(self.desc).change();
                    }
                }
                else{
                    // j_ele_desc.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_last_login_at = $("#last_login_atUserDaiDVTestInputId");
                if (j_ele_last_login_at.length > 0){
                    var dateObj = new Date(Date.parse(self.last_login_at));
                    if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_last_login_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_last_login_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_created_by = $("#created_byAccountUserDaiDVTestInputId");
                if (j_ele_created_by.length > 0){
                    if (j_ele_created_by.attr('name') != 'uuid'){
                        j_ele_created_by.val(self.created_by).change();
                    }
                }
                else{
                    // j_ele_created_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_updated_by = $("#updated_byAccountUserDaiDVTestInputId");
                if (j_ele_updated_by.length > 0){
                    if (j_ele_updated_by.attr('name') != 'uuid'){
                        j_ele_updated_by.val(self.updated_by).change();
                    }
                }
                else{
                    // j_ele_updated_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_updated_at = $("#updated_atUserDaiDVTestInputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at));
                    if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_updated_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_created_at = $("#created_atUserDaiDVTestInputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at));
                    if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_created_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }


        return self;
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillFormModal(modals_type,formId=null){
        //modals_type
        //*Create
        //*Detail
        //*Edit
        var apart=modals_type+'Modal';

        var self = this;


            try{
                var j_ele_uuid = $("#uuidUserDaiDVTest"+apart+"InputId");
                if (j_ele_uuid.length > 0 && self.uuid !=null){
                    if (j_ele_uuid.attr('name') == 'uuid'){
                        j_ele_uuid.val(self.uuid).change();
                    }
                }
                else{
                    // j_ele_uuid.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

                        try{
                            var j_ele_avatar = $("#avatarUserDaiDVTest"+apart+"FileAreaId");
                            if (j_ele_avatar.length > 0){
                                j_ele_avatar.html('');


                            var value=self.avatar;
                            if(value!= undefined && value!= ""){
                                var decode_url = decodeURIComponent(value);
                                var filename = decode_url.split('/')[decode_url.split('/').length-1]
                                var file_html="";
                                var edit_text = "d-none";
                                if (modals_type.toLowerCase() == "edit") {
                                    edit_text = "";
                                }
                                file_html +=`
                                    <div class="form-group row col-xl-8 table-hover mt-1" style="background-color:gainsboro;height: 25px;" id="` + self.uuid + `AttachmentDivId">
                                        <div class="col-xl-10 view-attachment-class" >
                                            <span><a style="color:cornflowerblue"  target="_blank" href="` + value + `"><p><b>` + filename + `</b></p></a></span>
                                        </div>
                                        <div class="col-xl-2 text-end ` + edit_text + `">
                                            <i class="fas fa-times" style="color:gray" file-uuid="` + self.uuid + `" id="` + self.uuid + `btnDeleteId" onclick="avataruserDaiDVTestDeletedAttacthment(this)"></i>
                                        </div>
                                    </div>
                                `;
                            }


                                j_ele_avatar.html(file_html);
                            }
                            else{
                                // j_ele_avatar.html('');
                            }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }

            try{
                var j_ele_name = $("#nameUserDaiDVTest"+apart+"InputId");
                if (j_ele_name.length > 0){
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.val(self.name).change();
                    }
                }
                else{
                    // j_ele_name.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_username = $("#usernameUserDaiDVTest"+apart+"InputId");
                if (j_ele_username.length > 0){
                    if (j_ele_username.attr('name') != 'uuid'){
                        j_ele_username.val(self.username).change();
                    }
                }
                else{
                    // j_ele_username.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_gender = $("#genderUserDaiDVTest"+apart+"InputId");
                if (j_ele_gender.length > 0){
                    if (j_ele_gender.attr('name') != 'uuid'){
                        j_ele_gender.val(self.gender).change();
                    }
                }
                else{
                    // j_ele_gender.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_year_of_bird = $("#year_of_birdUserDaiDVTest"+apart+"InputId");
                if (j_ele_year_of_bird.length > 0){
                    if (j_ele_year_of_bird.attr('name') != 'uuid'){
                        j_ele_year_of_bird.val(self.year_of_bird).change();
                    }
                }
                else{
                    // j_ele_year_of_bird.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_phone = $("#phoneUserDaiDVTest"+apart+"InputId");
                if (j_ele_phone.length > 0){
                    if (j_ele_phone.attr('name') != 'uuid'){
                        j_ele_phone.val(self.phone).change();
                    }
                }
                else{
                    // j_ele_phone.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_email = $("#emailUserDaiDVTest"+apart+"InputId");
                if (j_ele_email.length > 0){
                    if (j_ele_email.attr('name') != 'uuid'){
                        j_ele_email.val(self.email).change();
                    }
                }
                else{
                    // j_ele_email.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_foreign_language = $("#foreign_languageUserDaiDVTest"+apart+"InputId");
                if (j_ele_foreign_language.length > 0){
                    if (j_ele_foreign_language.attr('name') != 'uuid'){
                        j_ele_foreign_language.val(self.foreign_language).change();
                    }
                }
                else{
                    // j_ele_foreign_language.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

                        try{
                            var j_ele_is_administrators = $("#is_administratorsUserDaiDVTest"+apart+"InputId");
                            if (j_ele_is_administrators.length > 0){
                                if (j_ele_is_administrators.attr('name') != 'uuid'){
                                    j_ele_is_administrators.prop('checked',self.is_administrators).change();
                                }
                            }
                            else{
                                // j_ele_is_administrators.val(null);
                            }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }

                        try{
                            var j_ele_is_deleted = $("#is_deletedUserDaiDVTest"+apart+"InputId");
                            if (j_ele_is_deleted.length > 0){
                                if (j_ele_is_deleted.attr('name') != 'uuid'){
                                    j_ele_is_deleted.prop('checked',self.is_deleted).change();
                                }
                            }
                            else{
                                // j_ele_is_deleted.val(null);
                            }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }

            try{
                var j_ele_desc = $("#descUserDaiDVTest"+apart+"InputId");
                if (j_ele_desc.length > 0){
                    if (j_ele_desc.attr('name') != 'uuid'){
                        j_ele_desc.val(self.desc).change();
                    }
                }
                else{
                    // j_ele_desc.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_last_login_at = $("#last_login_atUserDaiDVTest"+apart+"InputId");
                if (j_ele_last_login_at.length > 0){
                    var dateObj = new Date(Date.parse(self.last_login_at));
                      if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_last_login_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_last_login_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

                try{
                    var j_ele_created_by = $("#created_byAccountUserDaiDVTest"+apart+"InputId");
                    if (j_ele_created_by.length > 0){
                        var value=self["created_by"]["uuid"];
                        j_ele_created_by.val(value).change();
                    }
                    else{
                        // j_ele_created_by.val(null);
                    }
                }
                catch(err) {
                    console.log('err = ', err);
                }

                try{
                    var j_ele_updated_by = $("#updated_byAccountUserDaiDVTest"+apart+"InputId");
                    if (j_ele_updated_by.length > 0){
                        var value=self["updated_by"]["uuid"];
                        j_ele_updated_by.val(value).change();
                    }
                    else{
                        // j_ele_updated_by.val(null);
                    }
                }
                catch(err) {
                    console.log('err = ', err);
                }

            try{
                var j_ele_updated_at = $("#updated_atUserDaiDVTest"+apart+"InputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at));
                      if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_updated_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_created_at = $("#created_atUserDaiDVTest"+apart+"InputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at));
                      if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_created_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            if (formId!=null){

            var arr_table=[];
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_table.push(obj);
                })
            }
            if (arr_table.length > 0) {
                arr_table.forEach(element => {
                        var JS_MODEL_APPNAME=element.attr("app-model-name");
                        var search_data=element.attr("parent-attr-name") +"="+self.uuid;
                        window[JS_MODEL_APPNAME + "FillTableInForm"](1,search_data,element.attr("id"),modals_type.toLowerCase());
                    });
                }
            }




        return self;
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillTestDataFormModal(modals_type,formId=null){
        //modals_type
        //*Create
        //*Detail
        //*Edit
        var apart=modals_type+'Modal';

        var self = this;

            try{
                var j_ele_uuid = $("#uuidUserDaiDVTest"+apart+"InputId");
                if (j_ele_uuid.length > 0 && self.uuid !=null){
                    if (j_ele_uuid.attr('name') == 'uuid'){
                        j_ele_uuid.val(self.uuid).change();
                    }
                }
                else{
                    // j_ele_uuid.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

                        try{
                            var j_ele_avatar = $("#avatarUserDaiDVTest"+apart+"FileAreaId");
                            if (j_ele_avatar.length > 0){
                                j_ele_avatar.html('');


                            var value=self.avatar;
                            if(value!= undefined && value!= ""){
                                var decode_url = decodeURIComponent(value);
                                var filename = decode_url.split('/')[decode_url.split('/').length-1]
                                var file_html="";
                                var edit_text = "d-none";
                                if (modals_type.toLowerCase() == "edit") {
                                    edit_text = "";
                                }
                                file_html +=`
                                    <div class="form-group row col-xl-8 table-hover mt-1" style="background-color:gainsboro;height: 25px;" id="` + self.uuid + `AttachmentDivId">
                                        <div class="col-xl-10 view-attachment-class" >
                                            <span><a style="color:cornflowerblue"  target="_blank" href="` + value + `"><p><b>` + filename + `</b></p></a></span>
                                        </div>
                                        <div class="col-xl-2 text-end ` + edit_text + `">
                                            <i class="fas fa-times" style="color:gray" file-uuid="` + self.uuid + `" id="` + self.uuid + `btnDeleteId" onclick="avataruserDaiDVTestDeletedAttacthment(this)"></i>
                                        </div>
                                    </div>
                                `;
                            }


                                j_ele_avatar.html(file_html);
                            }
                            else{
                                // j_ele_avatar.html('');
                            }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }

            try{
                var j_ele_name = $("#nameUserDaiDVTest"+apart+"InputId");
                if (j_ele_name.length > 0){
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.val(self.name).change();
                    }
                }
                else{
                    // j_ele_name.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_username = $("#usernameUserDaiDVTest"+apart+"InputId");
                if (j_ele_username.length > 0){
                    if (j_ele_username.attr('name') != 'uuid'){
                        j_ele_username.val(self.username).change();
                    }
                }
                else{
                    // j_ele_username.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_gender = $("#genderUserDaiDVTest"+apart+"InputId");
                if (j_ele_gender.length > 0){
                    if (j_ele_gender.attr('name') != 'uuid'){
                        j_ele_gender.val(self.gender).change();
                    }
                }
                else{
                    // j_ele_gender.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_year_of_bird = $("#year_of_birdUserDaiDVTest"+apart+"InputId");
                if (j_ele_year_of_bird.length > 0){
                    if (j_ele_year_of_bird.attr('name') != 'uuid'){
                        j_ele_year_of_bird.val(self.year_of_bird).change();
                    }
                }
                else{
                    // j_ele_year_of_bird.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_phone = $("#phoneUserDaiDVTest"+apart+"InputId");
                if (j_ele_phone.length > 0){
                    if (j_ele_phone.attr('name') != 'uuid'){
                        j_ele_phone.val(self.phone).change();
                    }
                }
                else{
                    // j_ele_phone.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_email = $("#emailUserDaiDVTest"+apart+"InputId");
                if (j_ele_email.length > 0){
                    if (j_ele_email.attr('name') != 'uuid'){
                        j_ele_email.val(self.email).change();
                    }
                }
                else{
                    // j_ele_email.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_foreign_language = $("#foreign_languageUserDaiDVTest"+apart+"InputId");
                if (j_ele_foreign_language.length > 0){
                    if (j_ele_foreign_language.attr('name') != 'uuid'){
                        j_ele_foreign_language.val(self.foreign_language).change();
                    }
                }
                else{
                    // j_ele_foreign_language.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

                        try{
                            var j_ele_is_administrators = $("#is_administratorsUserDaiDVTest"+apart+"InputId");
                            if (j_ele_is_administrators.length > 0){
                                if (j_ele_is_administrators.attr('name') != 'uuid'){
                                    j_ele_is_administrators.prop('checked',self.is_administrators).change();
                                }
                            }
                            else{
                                // j_ele_is_administrators.val(null);
                            }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }

                        try{
                            var j_ele_is_deleted = $("#is_deletedUserDaiDVTest"+apart+"InputId");
                            if (j_ele_is_deleted.length > 0){
                                if (j_ele_is_deleted.attr('name') != 'uuid'){
                                    j_ele_is_deleted.prop('checked',self.is_deleted).change();
                                }
                            }
                            else{
                                // j_ele_is_deleted.val(null);
                            }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }

            try{
                var j_ele_desc = $("#descUserDaiDVTest"+apart+"InputId");
                if (j_ele_desc.length > 0){
                    if (j_ele_desc.attr('name') != 'uuid'){
                        j_ele_desc.val(self.desc).change();
                    }
                }
                else{
                    // j_ele_desc.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_last_login_at = $("#last_login_atUserDaiDVTest"+apart+"InputId");
                if (j_ele_last_login_at.length > 0){
                    var dateObj = new Date(Date.parse(self.last_login_at));
                      if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_last_login_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_last_login_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

                try{
                    var j_ele_created_by = $("#created_byAccountUserDaiDVTest"+apart+"InputId");
                    if (j_ele_created_by.length > 0){
                        var value=self["created_by"]["uuid"];
                        j_ele_created_by.val(value).change();
                    }
                    else{
                        // j_ele_created_by.val(null);
                    }
                }
                catch(err) {
                    console.log('err = ', err);
                }

                try{
                    var j_ele_updated_by = $("#updated_byAccountUserDaiDVTest"+apart+"InputId");
                    if (j_ele_updated_by.length > 0){
                        var value=self["updated_by"]["uuid"];
                        j_ele_updated_by.val(value).change();
                    }
                    else{
                        // j_ele_updated_by.val(null);
                    }
                }
                catch(err) {
                    console.log('err = ', err);
                }

            try{
                var j_ele_updated_at = $("#updated_atUserDaiDVTest"+apart+"InputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at));
                      if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_updated_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            try{
                var j_ele_created_at = $("#created_atUserDaiDVTest"+apart+"InputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at));
                      if (dateObj != "Invalid Date"){
                        var newdate = moment(dateObj).format('DD/MM/YYYY');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.val(newdate).change();
                    }
                }
                else{
                    // j_ele_created_at.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }

            if (formId!=null){

            var arr_table=[];
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_table.push(obj);
                })
            }
            if (arr_table.length > 0) {
                arr_table.forEach(element => {
                        var JS_MODEL_APPNAME=element.attr("app-model-name");
                        var search_data=element.attr("parent-attr-name") +"="+self.uuid;
                        window[JS_MODEL_APPNAME + "FillTableInForm"](1,search_data,element.attr("id"),modals_type.toLowerCase());
                    });
                }
            }




        return self;
    }

    // ########## [CREATE] post Objects to REST API --> return object if success ##############
    tCreatePostApi(){
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });

        var self = this;

        $.ajax({
            url: UserDaiDVTest_URL,
            type: "POST",
            async: false,
            cache: false,
            timeout: 30000,

            //data: JSON.stringify({data:"test"}),
            //data: JSON.stringify(self),
            data: JSON.stringify(self),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                    self = new UserDaiDVTest(data);
                    UserDaiDVTestGetDataTable(UserDaiDVTestpagination["current_page"]);
                    if(is_continue_form){
                        is_continue_form=false;
                        toastr.success('Thêm mới thành công');
                        $(location).prop('href', "/DaiDVTest/User/create/");


                    }else if(is_continue_modal){
                        is_continue_modal=false;
                        UserRefreshCreateModal();
                        toastr.success('Thêm mới thành công');
                    }else{
                        $('.modal').modal('hide');
                    //    $.confirm({
                    //    title: 'THÀNH CÔNG',
                    //    content: 'Thêm mới thành công',
                    //    buttons: {
                    //        NewOther:{
                     //           text: 'Thêm mới',
                    //            btnClass: 'btn-blue',
                    //            keys: ['enter', 'shift'],
                    //            action: function(){
                    //                $(location).prop('href', "/DaiDVTest/User/create/");
                    //            }
                    //        },
                    //        Show:{
                    //            text: 'Chi tiết',
                    //            action: function(){
                    //                $(location).prop('href', "/DaiDVTest/User/detail/" + self.uuid + "/");
                    //            }
                     //       },
                    //        close: {
                    //            text: 'Hủy',
                    //            action: function(){
                    //               $('.modal').modal('hide');
                    //            }
                    //        },
                    //    }
                    //});
                    }
                    // self.tFillForm();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }
                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }

            },
        });
        return self;
    }

    // ########## [UPDATE] post Objects to REST API --> return object if success ##############
    tUpdatePostApi(formId=null){
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,

        });
        var self = this;
        var formData;
        var arr_table = [];
        if(formId==null){
         formData = new FormData($('#userDaiDVTestCreateFormId')[0]);

        }
        else{
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    obj = $(this);
                    arr_table.push(obj);
                    // $(this).remove();

                })
            }
            formData = new FormData();
            form.find(':input').each(function() {
                var attr = $(this).attr('name');
                var type = $(this).attr('type');
                var data_type = $(this).attr('data-type');
                //data-type='currency'
                var date = $(this).attr('data-datepicker');
                if (($(this).closest("table").length > 0 && $(this).closest("table").closest("form").attr("id") == formId) || ($(this).closest("form").length > 0 && $(this).closest("form").attr("id") != formId)) {
                    return;
                }
                if (typeof attr !== 'undefined' && attr !== false) {
                    if (typeof date !== 'undefined' && date !== false) {
                        formData.append($(this).attr('name'), toDatePythonByStringTime($(this).val(), 'DD/MM/YYYY'));
                    } else {
                        if (type == 'file') {
                            var files = $(this)[0].files;
                            // Check file selected or not
                            if(files.length > 0 ) {
                                formData.append($(this).attr('name'), files[0]);
                            }
                        }
                        else if(type == 'checkbox'){
                            formData.append($(this).attr('name'), $(this).is(":checked"));
                        }
                        else if(type == 'radio'){

                            if($(this).is(":checked")){
                                formData.set($(this).attr('name'),  $(this).val());
                            }
                        } else {

                          //  if(Array.isArray($(this).val())){
                          //      var arr=$(this).val();
                          //      for(var i in arr)
                          //          formData.append($(this).attr('name'), arr[i]);
                          //  }
                          //  else
                          //  {
                          //      formData.append($(this).attr('name'), $(this).val());
                          //  }

                            if (Array.isArray($(this).val())) {
                                var arr = $(this).val();
                                for (var i in arr)
                                    formData.append($(this).attr('name'), arr[i]);
                            } else {
                                if(data_type == "currency"){
                                    var currency_value = formatNumber($(this).val());
                                    currency_value = currency_value.replaceAll(",", "");
                                    formData.append($(this).attr('name'),currency_value );

                                }else{
                                    formData.append($(this).attr('name'), $(this).val());
                                }
                            }
                        }
                    }
                }
            });
        }
        if(formData.get('uuid')==null || formData.get('uuid')=='' || formData.get('uuid')==null){
            return;
        }else{
            this.uuid=formData.get('uuid');
        }

        var file_eles = $(".user-daidvtest");
        for (var i = 0; i < file_eles.length; i++) {
            console.log('file_eles[i] = ', file_eles[i]);
            var files = file_eles[i].files;
            // Check file selected or not
            if(files.length > 0 ) {
                formData.append(file_eles[i].getAttribute('name'), files[0]);
            }
        }

        var is_has_children=false;
        var is_save_self_table=false;
        var is_notification=false;
        var is_done=false;
        if (arr_table.length > 0) {
            arr_table.forEach(element => {
                var model_name=element.attr("model_name");
                    var depend=element.attr("depend");
                    var tr_length=element.find("tbody").find("tr").length ;
                    if(tr_length >1){
                        if(depend==='self-depend'){
                            is_save_self_table=true;
                            window[model_name + "SaveInlineTable"](element.attr("id"),null,null,formData);
                            arr_table.pop(element);
                        }else{
                            element.attr("parent-attr-uuid",formData.get("uuid"));
                            is_has_children=true;
                        }
                    }
            });
        }
        if(!is_save_self_table){
            $.ajax({
                url: UserDaiDVTest_URL + self.uuid + "/",
                // type: "PUT",
                type: "PATCH",
                async: false,
                cache: false,
                timeout: 30000,

                //data: JSON.stringify({data:"test"}),
                //data: JSON.stringify(self),
                data: formData,
                //contentType: "multipart/form-data",
                contentType: false,
                // dataType : false,
                processData: false,
                success: function (data) {
                        self = new UserDaiDVTest(data);

                        UserDaiDVTestGetDataTable(UserDaiDVTestpagination["current_page"])
                        //$(location).prop('href', "/DaiDVTest/User/detail/" + self.uuid + "/");
                        if(is_continue_form){
                            is_continue_form=false;
                            if(!is_notification && (is_done||!is_has_children)){
                                is_notification = true;
                                toastr.success('Cập nhật thành công');
                            }
                            $(location).prop('href', "/DaiDVTest/User/create/");
                        }else if(is_continue_modal){
                            is_continue_modal=false;
                            UserRefreshCreateModal();
                            if(!is_notification && (is_done||!is_has_children)){
                                is_notification = true;
                                toastr.success('Cập nhật thành công');
                            }
                        }else{
                            $('.modal').modal('hide');
                        }
                        // self.tFillForm();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }
                    if(is_debug){
                        $.alert({
                            title: 'Error [' + xhr.status + '] ' + thrownError ,
                            content: xhr.responseText,
                        });
                    }
                },
            });
        }
        if(is_has_children){
            arr_table.forEach(element => {
                var model_name=element.attr("model_name");
                var depend=element.attr("depend");
                if(depend!='self-depend'){
                    window[model_name + "SaveInlineTable"](element.attr("id"),null,self.uuid);
                }
            });
            is_done=true;
        }
        if(is_done || !is_has_children){
            if(is_continue_form){
                is_continue_form=false;
                if(!is_notification && (is_done||!is_has_children)){
                    is_notification = true;
                    toastr.success('Cập nhật thành công');
                }
                    $(location).prop('href', "/DaiDVTest/User/create/");
            }else if(is_continue_modal){
                is_continue_modal=false;
                UserRefreshCreateModal();
                if(!is_notification && (is_done||!is_has_children)){
                    is_notification = true;
                    toastr.success('Cập nhật thành công');
                }
            }else{
                $('.modal').modal('hide');
                if(!is_notification && (is_done||!is_has_children)){
                    is_notification = true;
                    toastr.success('Cập nhật thành công');
                }
            }
        }
        return self;
    }

    // ########## [FORM] [CREATE] post Objects to REST API --> return object if success ##############
    tCreateNewPostFormApi(formId=null){
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        $('#idUserDaiDVTestInputId').val(null);
        $('#uuidUserDaiDVTestInputId').val(uuidv4());
        var self = this;
        var formData;
        var arr_table = [];
        if(formId==null){
         formData = new FormData($('#userDaiDVTestCreateFormId')[0]);

        }
        else{
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    obj = $(this);
                    arr_table.push(obj);
                    // $(this).remove();

                })
            }
            formData = new FormData();
            form.find(':input').each(function() {
                var attr = $(this).attr('name');
                var type = $(this).attr('type');
                var data_type = $(this).attr('data-type');
                //data-type='currency'
                var date = $(this).attr('data-datepicker');
                console.log('closest("table") :', $(this).closest("table").length);
                console.log('$(this).closest("table") > 0 :', $(this).closest("table").length > 0);
                console.log('$(this).closest("table").closest("form") :', $(this).closest("table").closest("form"));
                console.log('$(this).closest("table").closest("form") == formId) :', $(this).closest("table").closest("form") == formId);
                console.log('$(this).closest("form").id != formId :', $(this).closest("form").id != formId);
                console.log('$(this).closest("form").id :', $(this).closest("form").attr("id"));
                console.log(' formId :', formId);
                console.log('$(this).closest("form").length > 0 :', $(this).closest("form").length > 0);
                console.log('($(this).closest("form").length > 0 && $(this).closest("form").id != formId) :', ($(this).closest("form").length > 0 && $(this).closest("form").attr("id") != formId));
                if (($(this).closest("table").length > 0 && $(this).closest("table").closest("form").attr("id") == formId) || ($(this).closest("form").length > 0 && $(this).closest("form").attr("id") != formId)) {
                    return;
                }
                if (typeof attr !== 'undefined' && attr !== false) {
                    if (typeof date !== 'undefined' && date !== false) {
                        formData.append($(this).attr('name'), toDatePythonByStringTime($(this).val(), 'DD/MM/YYYY'));
                    } else {
                        if (type == 'file') {
                            var files = $(this)[0].files;
                            // Check file selected or not
                            if (files.length > 0) {
                                formData.append($(this).attr('name'), files[0]);
                            }
                        } else if (type == 'checkbox') {
                            formData.append($(this).attr('name'), $(this).is(":checked"));
                        } else if (type == 'radio') {

                            if ($(this).is(":checked")) {
                                formData.set($(this).attr('name'), $(this).val());
                            }
                        } else {

                            if (Array.isArray($(this).val())) {
                                var arr = $(this).val();
                                for (var i in arr)
                                    formData.append($(this).attr('name'), arr[i]);
                            } else {
                                if(data_type == "currency"){
                                    var currency_value = formatNumber($(this).val());
                                    currency_value = currency_value.replaceAll(",", "");
                                    formData.append($(this).attr('name'),currency_value );

                                }else{
                                    formData.append($(this).attr('name'), $(this).val());
                                }
                            }
                        }
                    }
                }
            });
        }

        //

        var file_eles = $(".user-daidvtest");
        for (var i = 0; i < file_eles.length; i++) {
            console.log('file_eles[i] = ', file_eles[i]);
            var files = file_eles[i].files;
            // Check file selected or not
            if(files.length > 0 ) {
                formData.append(file_eles[i].getAttribute('name'), files[0]);
            }
        }
        var is_done=false;
        var is_has_children=false;
        var is_save_self_table=false;
        var is_notification=false;
        if (arr_table.length > 0) {
            arr_table.forEach(element => {
                var model_name=element.attr("model_name");
                    var depend=element.attr("depend");
                    var tr_length=element.find("tbody").find("tr").length ;
                    if(tr_length >1){
                        if(depend==='self-depend'){
                            is_save_self_table=true;
                            window[model_name + "SaveInlineTable"](element.attr("id"),null,null,formData);
                            arr_table.pop(element);
                        }else{
                            element.attr("parent-attr-uuid",formData.get("uuid"));
                            is_has_children=true;
                        }
                    }
            });
        }
        if(is_save_self_table){
            LoadUserDaiDVTestList();
        }
        if(!is_save_self_table){
                $.ajax({
                url: UserDaiDVTest_URL,
                type: "POST",
                async: false,
                cache: false,
                timeout: 30000,
                data: formData,
                //contentType: "multipart/form-data",
                contentType: false,
                // dataType : false,
                processData: false,
                success: function (data) {
                        self = new UserDaiDVTest(data);
                        LoadUserDaiDVTestList();
                        UserDaiDVTestGetDataTable(UserDaiDVTestpagination["current_page"]);
                        if(is_continue_form){
                            is_continue_form=false;
                            if(!is_notification){
                                is_notification = true;
                                toastr.success('Thêm mới thành công');
                            }


                            $(location).prop('href', "/DaiDVTest/User/create/");
                        }else if(is_continue_modal){
                            is_continue_modal=false;
                            UserRefreshCreateModal();
                            if(!is_notification){
                                is_notification = true;
                                toastr.success('Thêm mới thành công');
                            }
                        }else{
                            if(!is_notification){
                                is_notification = true;
                                toastr.success('Thêm mới thành công');
                            }
                            $('.modal').modal('hide');
                        }

                        // self.tFillForm();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }
                    if(is_debug){
                        $.alert({
                            title: 'Error [' + xhr.status + '] ' + thrownError ,
                            content: xhr.responseText,
                        });
                    }
                },
            });
        }
        if(is_has_children){
            arr_table.forEach(element => {
                var model_name=element.attr("model_name");
                var depend=element.attr("depend");
                if(depend!='self-depend'){
                    window[model_name + "SaveInlineTable"](element.attr("id"),null,self.uuid);
                }
            });
            is_done=true;
        }
        if(is_done || !is_has_children){
            if(is_continue_form){
                is_continue_form=false;
                if(!is_notification){
                    is_notification = true;
                    toastr.success('Thêm mới thành công');
                }
                $(location).prop('href', "/DaiDVTest/User/create/");
            }else if(is_continue_modal){
                is_continue_modal=false;
                UserRefreshCreateModal();
                if(!is_notification){
                    is_notification = true;
                    toastr.success('Thêm mới thành công');
                }
            }else{
                if(!is_notification){
                    is_notification = true;
                    toastr.success('Thêm mới thành công');
                }
                $('.modal').modal('hide');
            }
        }
        return self;
    }

    // ########## [ROW] [CREATE] POST OBJ TO REST API --> return object if success ##############
    tCreateNewPostRowApi($this,form_data_parent=null,is_notice=false){
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        var self = this;
        var formData = new FormData();
        formData.set('uuid',uuidv4());
        //
        var depend=$($this).attr('depend');
        if(depend!="self-depend"){
            formData.append($($this).attr('parent-attr-name'),$($this).attr('parent-attr-uuid'))
        }
            $($this).find(':input').each(function() {
                var attr = $(this).attr('name');
                var type = $(this).attr('type');
                var data_type = $(this).attr('data-type');
                //data-type='currency'
                var date = $(this).attr('data-datepicker');
                if (typeof attr !== 'undefined' && attr !== false) {
                if (typeof date !== 'undefined' && date !== false) {
                    formData.append($(this).attr('name'), toDatePythonByStringTime($(this).val(), 'DD/MM/YYYY'));
                } else {
                    if (type == 'file') {
                        var files = $(this)[0].files;
                        // Check file selected or not
                        if(files.length > 0 ) {
                            formData.append($(this).attr('name'), files[0]);
                        }
                    }
                    else if(type == 'checkbox'){
                        formData.append($(this).attr('name'), $(this).is(":checked"));
                    }
                    else if(type == 'radio'){

                        if($(this).is(":checked")){
                            formData.set($(this).attr('name'),  $(this).val());
                        }
                    } else {
                        if (Array.isArray($(this).val())) {
                                var arr = $(this).val();
                                for (var i in arr)
                                    formData.append($(this).attr('name'), arr[i]);
                        } else {
                            if(data_type == "currency"){
                                var currency_value = formatNumber($(this).val());
                                currency_value = currency_value.replaceAll(",", "");
                                formData.append($(this).attr('name'),currency_value );

                            }else{
                                formData.append($(this).attr('name'), $(this).val());
                            }
                        }
                    }
                }
            }
            });
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        if(form_data_parent!=null){
                    for (var pair of form_data_parent.entries()) {
                        console.log(pair[0] + ', ' + pair[1]);
                        if(formData.get(pair[0])=== 'undefined' || formData.get(pair[0])=== '' || formData.get(pair[0])=== null){
                                formData.set(pair[0],pair[1])
                        }

                    }
                }
        $.ajax({
            url: UserDaiDVTest_URL,
            type: "POST",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            //contentType: "multipart/form-data",
            contentType: false,
            // dataType : false,
            processData: false,
            success: function (data) {
            $($this).attr("is-new","added");
            $($this).attr("uuid",formData.get('uuid'));
            if(is_notice)
                {
                    toastr.success('Thêm mới thành công');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                    if(is_debug){
                        $.alert({
                            title: 'Error [' + xhr.status + '] ' + thrownError ,
                            content: xhr.responseText,
                        });
                    }
            },
        });
        return self;
    }


    tCreateByFormDataApi(formData,action_title) {
    // cho phép thêm mới với formdata custom riêng cho từng trường trường hợp
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        $.ajax({
            url: UserDaiDVTest_URL,
            type: "POST",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                toastr.success(action_title+' thành công');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
            },
        });
        return self;
    }

                // ########## [ROW] [UPDATE] POST OBJ TO REST API --> return object if success ##############
                tUpdateNewPostRowApi($this,form_data_parent=null,is_notice=false){
                    //cập nhật với từng dòng trên bảng
                    $.ajaxSetup({
                        headers : {
                            'CSRFToken' : getCSRFTokenValue(),
                            'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
                        },
                        tryCount : 0,
                        retryLimit : 3,
                    });
                    var self = this;
                    var formData = new FormData();
                    var uuid = $($this).attr("uuid");
                    var depend=$($this).attr('depend');
                    if(depend!="self-depend"){
                    formData.append($($this).attr('parent-attr-name'),$($this).attr('parent-attr-uuid'))
                    }
                   $($this).find(':input').each(function() {
                    var attr = $(this).attr('name');
                    var type = $(this).attr('type');
                    var data_type = $(this).attr('data-type');
                    //data-type='currency'
                    var date = $(this).attr('data-datepicker');
                    if (typeof attr !== 'undefined' && attr !== false) {
                    if (typeof date !== 'undefined' && date !== false) {
                        formData.append($(this).attr('name'), toDatePythonByStringTime($(this).val(), 'DD/MM/YYYY'));
                    } else {
                        if (type == 'file') {
                            var files = $(this)[0].files;
                            // Check file selected or not
                            if(files.length > 0 ) {
                                formData.append($(this).attr('name'), files[0]);
                            }
                        }
                        else if(type == 'checkbox'){
                            formData.append($(this).attr('name'), $(this).is(":checked"));
                        }
                        else if(type == 'radio'){

                            if($(this).is(":checked")){
                                formData.set($(this).attr('name'),  $(this).val());
                            }
                        } else {
                            //formData.append($(this).attr('name'), $(this).val());
                            if (Array.isArray($(this).val())) {
                                var arr = $(this).val();
                                for (var i in arr)
                                    formData.append($(this).attr('name'), arr[i]);
                            } else {
                                if(data_type == "currency"){
                                    var currency_value = formatNumber($(this).val());
                                    currency_value = currency_value.replaceAll(",", "");
                                    formData.append($(this).attr('name'),currency_value );

                                }else{
                                    formData.append($(this).attr('name'), $(this).val());
                                }
                            }
                        }
                    }
                }
            });
                    for (var pair of formData.entries()) {
                        console.log(pair[0] + ', ' + pair[1]);
                    }
                    for (var pair of formData.entries()) {
                    console.log(pair[0] + ', ' + pair[1]);
                }
                if(form_data_parent!=null){
                    for (var pair of form_data_parent.entries()) {
                        console.log(pair[0] + ', ' + pair[1]);
                        if(formData.get(pair[0])=== 'undefined' && formData.get(pair[0])=== '' || formData.get(pair[0])=== null){
                                formData.set(pair[0],pair[1])
                        }

                    }
                }
                    //
                    $.ajax({
                        url: UserDaiDVTest_URL + uuid + "/",
                        type: "PATCH",
                        async: false,
                        cache: false,
                        timeout: 30000,
                        data: formData,
                        //contentType: "multipart/form-data",
                        contentType: false,
                        // dataType : false,
                        processData: false,
                        success: function (data) {
                        $($this).attr("is-new","added");
                        if(is_notice)
                        {
                            toastr.success('Cập nhật thành công');
                        }
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr.status);
                            console.log(thrownError);
                            if (xhr.textStatus == 'timeout') {
                                this.tryCount++;
                                if (this.tryCount <= this.retryLimit) {
                                    //try again
                                    $.ajax(this);
                                    return;
                                }
                                return;
                            }

                            if(is_debug){
                                $.alert({
                                    title: 'Error [' + xhr.status + '] ' + thrownError ,
                                    content: xhr.responseText,
                                });
                            }
                        },
                    });
                    return self;
                }

    tDeleteApi(uuid=null){
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });


        var self = this;
        var uuid_go=""
        if(uuid==null){
            uuid_go=cr_uuid;
        }else{
            uuid_go=uuid;
        }
        console.log('self.id = ', self.id);
        $.ajax({
            url: UserDaiDVTest_URL + uuid_go + "/",
            type: "DELETE",
            async: false,
            cache: false,
            timeout: 30000,

            //data: JSON.stringify({data:"test"}),
            //data: JSON.stringify(self),
            //data: JSON.stringify(self),
            //contentType: "application/json; charset=utf-8",
            //dataType: "json",
            success: function (data) {
                toastr.success('Xóa thành công');
                UserDaiDVTestGetDataTable(UserDaiDVTestpagination["current_page"]);
                if(cr_uuid!=""){
                    $(location).prop('href', "/DaiDVTest/User/create/");
                }
                console.log(data);

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
            },
        });
    }

    tDeleteApiWithDataSearch(uuid=null,data_search=null){
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });


        var self = this;
        var uuid_go=""
        if(uuid==null){
            uuid_go=cr_uuid;
        }else{
            uuid_go=uuid;
        }

        console.log('self.id = ', self.id);
        $.ajax({
            url: UserDaiDVTest_URL + uuid_go + "/",
            type: "DELETE",
            async: false,
            cache: false,
            timeout: 30000,

            //data: JSON.stringify({data:"test"}),
            //data: JSON.stringify(self),
            //data: JSON.stringify(self),
            //contentType: "application/json; charset=utf-8",
            //dataType: "json",
            success: function (data) {
                toastr.success('Xóa thành công');
                UserDaiDVTestSearchData(UserDaiDVTestpagination["current_page"],"filter",data_search);
                if(cr_uuid!=""){
                    $(location).prop('href', "/DaiDVTest/User/create/");
                }
                console.log(data);

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
            },
        });
    }

    tDeleteFileApi(uuid = null,attr_name) {
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        var formData = new FormData();
        formData.set("attach-field",attr_name);
        formData.set("uuid",uuid);

        $.ajax({
            url: UserDaiDVTest_REMOVEFILE_URL+uuid+"/",
            type: "PATCH",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            //contentType: "multipart/form-data",
            contentType: false,
            // dataType : false,
            processData: false,
            success: function(data) {
                toastr.success('Đã xóa tập đính kèm!');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
            },
        });
        return self;
    }

    tUpdateOnlyFieldApi(uuid = null,attr_name,attr_value,mess="Cập nhật") {
    //Cập nhật 1 trường thông tin, nhanh gọn
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        var formData = new FormData();
        formData.set(attr_name,attr_value);

        $.ajax({
            url: UserDaiDVTest_URL+uuid+"/",
            type: "PATCH",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            //contentType: "multipart/form-data",
            contentType: false,
            // dataType : false,
            processData: false,
            success: function(data) {
                toastr.success(mess+' thành công');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
            },
        });
        return self;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetAllObjApi(page=null,search_data=null){
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        var has_go_page=""
        if(page!=null){
            has_go_page="?page="+page;
        }
        this.callAjax =
        $.ajax({
            url: UserDaiDVTest_URL+has_go_page,
            type: "GET",
            //async: false,
            cache: false,
            timeout: 30000,

            success: function (data) {
                console.log('[tGetAllObjApi] data = ', data);
                // return new UserDaiDVTest(data);
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('next')){
                    if(data.next != null){
                    UserDaiDVTestpagination["has_next"]=true;
                    }else{
                    UserDaiDVTestpagination["has_next"]=false;

                    }
                }
                UserDaiDVTestpagination["current_page"]=page;
                if (data.hasOwnProperty('previous')){
                    if(data.previous != null){
                    UserDaiDVTestpagination["has_prev"]=true;
                    }else{
                    UserDaiDVTestpagination["has_prev"]=false;
                    }
                }
                if (data.hasOwnProperty('results')){
                    for (var j=0; j < data.results.length; j++){
                        var tmp = new UserDaiDVTest(data.results[j]);
                        results.push(tmp);
                    }
                    //if (data.hasOwnProperty('next') && data.next !== null){
                    //    this.url = data.next;
                    //    $.ajax(this);
                    //}
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
            },
        });
        return results;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetAllObjLargeApi(page=null,search_data=null){
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        var has_go_page=""
        if(page!=null){
            has_go_page="?page="+page;
        }
        this.callAjax =
        $.ajax({
            url: UserDaiDVTest_LARGE_URL+has_go_page,
            type: "GET",
            //async: false,
            cache: false,
            timeout: 30000,

            success: function (data) {
                console.log('[tGetAllObjLargeApi] data = ', data);
                // return new UserDaiDVTest(data);
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('next')){
                    if(data.next != null){
                    UserDaiDVTestpagination["has_next"]=true;
                    }else{
                    UserDaiDVTestpagination["has_next"]=false;

                    }
                }
                UserDaiDVTestpagination["current_page"]=page;
                if (data.hasOwnProperty('previous')){
                    if(data.previous != null){
                    UserDaiDVTestpagination["has_prev"]=true;
                    }else{
                    UserDaiDVTestpagination["has_prev"]=false;
                    }
                }
                if (data.hasOwnProperty('results')){
                    for (var j=0; j < data.results.length; j++){
                        var tmp = new UserDaiDVTest(data.results[j]);
                        results.push(tmp);
                    }
                    //if (data.hasOwnProperty('next') && data.next !== null){
                    //    this.url = data.next;
                    //    $.ajax(this);
                    //}
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
            },
        });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tSearchAllObjApi(page=null,search_data=null,typeSearch){
        //hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        var has_go_page=""
        if(page!=null){
            has_go_page="?page="+page;
        }
        //getValue for searching
        var slugSearch="";
        var SEARCH_URL="";
        if(typeSearch=="filter"){
            SEARCH_URL=UserDaiDVTest_FILTER_URL;

                slugSearch="&";

                                if($("#year_of_birdUserDaiDVTestFilterSearchInputId").length>0){
                                    var value=$("#year_of_birdUserDaiDVTestFilterSearchInputId").val();
                                    if(value!="" && value!=null){
                                        slugSearch+="year_of_bird__contains="+value+"&";
                                    }
                                }


                                if($("#emailUserDaiDVTestFilterSearchInputId").length>0){
                                    var value=$("#emailUserDaiDVTestFilterSearchInputId").val();
                                    if(value!="" && value!=null){
                                        slugSearch+="email__contains="+value+"&";
                                    }
                                }

                            slugSearch=slugSearch.slice(0, -1);
        }else{
            SEARCH_URL=UserDaiDVTest_SEARCH_URL;

                slugSearch="&";
                slugSearch+="search="+$("#userDaiDVTestQuickSearchInputId").val();

        }
        if(search_data!=null){
            SEARCH_URL=UserDaiDVTest_FILTER_URL;
            slugSearch="&";
            slugSearch+=search_data;
        }
        search_log["search_data"] = slugSearch;
        this.callAjax =
        $.ajax({
            url: SEARCH_URL+has_go_page+slugSearch,
            type: "GET",
            //async: false,
            cache: false,
            timeout: 30000,

            success: function (data) {
                console.log('[tGetAllObjApi] data = ', data);
                // return new UserDaiDVTest(data);
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('next')){
                    if(data.next != null){
                    UserDaiDVTestpagination["has_next"]=true;
                    }else{
                    UserDaiDVTestpagination["has_next"]=false;

                    }
                }
                UserDaiDVTestpagination["current_page"]=page;
                if (data.hasOwnProperty('previous')){
                    if(data.previous != null){
                    UserDaiDVTestpagination["has_prev"]=true;
                    }else{
                    UserDaiDVTestpagination["has_prev"]=false;
                    }
                }
                if (data.hasOwnProperty('results')){
                    for (var j=0; j < data.results.length; j++){
                        var tmp = new UserDaiDVTest(data.results[j]);
                        results.push(tmp);
                    }
                    //if (data.hasOwnProperty('next') && data.next !== null){
                    //    this.url = data.next;
                    //    $.ajax(this);
                    //}
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                    if(is_debug){
                        $.alert({
                            title: 'Error [' + xhr.status + '] ' + thrownError ,
                            content: xhr.responseText,
                        });
                    }
            },
        });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tSearchLargeObjApi(page=null,search_data=null,typeSearch){
        //[trà về max 1000 bản ghi]hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        var has_go_page=""
        if(page!=null){
            has_go_page="?page="+page;
        }
        //getValue for searching
        var slugSearch="";
        var SEARCH_URL="";
        if(typeSearch=="filter"){
            SEARCH_URL=UserDaiDVTest_LARGE_FILTER_URL;

                slugSearch="&";

                                if($("#year_of_birdUserDaiDVTestFilterSearchInputId").length>0){
                                    var value=$("#year_of_birdUserDaiDVTestFilterSearchInputId").val();
                                    if(value!="" && value!=null){
                                        slugSearch+="year_of_bird__contains="+value+"&";
                                    }
                                }


                                if($("#emailUserDaiDVTestFilterSearchInputId").length>0){
                                    var value=$("#emailUserDaiDVTestFilterSearchInputId").val();
                                    if(value!="" && value!=null){
                                        slugSearch+="email__contains="+value+"&";
                                    }
                                }

                            slugSearch=slugSearch.slice(0, -1);
        }else{
            SEARCH_URL=UserDaiDVTest_SEARCH_URL;

                slugSearch="&";
                slugSearch+="search="+$("#userDaiDVTestQuickSearchInputId").val();

        }
        if(search_data!=null){
            SEARCH_URL=UserDaiDVTest_LARGE_FILTER_URL;
            slugSearch="&";
            slugSearch+=search_data;
        }
        this.callAjax =
        $.ajax({
            url: SEARCH_URL+has_go_page+slugSearch,
            type: "GET",
            //async: false,
            cache: false,
            timeout: 30000,

            success: function (data) {
                console.log('[tGetAllObjApi] data = ', data);
                // return new UserDaiDVTest(data);
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('count')){
                    UserDaiDVTestpagination["total"]=data.count;
                }
                if (data.hasOwnProperty('next')){
                    if(data.next != null){
                    UserDaiDVTestpagination["has_next"]=true;
                    }else{
                    UserDaiDVTestpagination["has_next"]=false;

                    }
                }
                UserDaiDVTestpagination["current_page"]=page;
                if (data.hasOwnProperty('previous')){
                    if(data.previous != null){
                    UserDaiDVTestpagination["has_prev"]=true;
                    }else{
                    UserDaiDVTestpagination["has_prev"]=false;
                    }
                }
                if (data.hasOwnProperty('results')){
                    for (var j=0; j < data.results.length; j++){
                        var tmp = new UserDaiDVTest(data.results[j]);
                        results.push(tmp);
                    }
                    //if (data.hasOwnProperty('next') && data.next !== null){
                    //    this.url = data.next;
                    //    $.ajax(this);
                    //}
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                    if(is_debug){
                        $.alert({
                            title: 'Error [' + xhr.status + '] ' + thrownError ,
                            content: xhr.responseText,
                        });
                    }
            },
        });
        return results;
    }

    // ########## GET ONLY ONE OBJ FROM REST API (RETURN 01 OBJECTS) ##############
    tGetObjApi(uuid){
        this.callAjax = null;

        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        this.callAjax =
        $.ajax({
            url: UserDaiDVTest_URL + uuid + "/",
            type: "GET",
            async: false,
            cache: false,
            timeout: 30000,

            success: function (data) {
                console.log('[tGetObjApi] data = ', data);
                var n_obj = new UserDaiDVTest(data);
                console.log('n_obj = ', n_obj);
                n_obj.tFillForm();
                return n_obj;
                // if (data.hasOwnProperty('results')){
                //    if (data.results.length > 0){
                //        var tmp = new UserDaiDVTest(data[i]);
                //        return tmp;
                //    }
                //}
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
                return null;
            },
        });
        return null;
    }

    // Fill Table type 1: General Table
    // @tnd: Not yet fix the "fit for any table" issue
    tFillTable1(){
        var tbId = "userDaiDVTestDataTableId";
        var table = $("#" + tbId);
        if (table.length > 0){
            var tableBody = table.find("tbody");

            var html_text = (`
                <tr>
                    <td><a href="` + this.detailUrl + `">` + this.name + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.uuid + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.code + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.desc + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.image + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.name + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.name + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.name + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.updated_at + `</a></td>
                    <td><a href="` + this.detailUrl + `">` + this.created_at + `</a></td>
                <tr>
            `);
            // tableBody.empty();
            tableBody.prepend(html_text).change();
            // tableBody.append(html_text).change();
            return true;
        }
        else{
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }

    // Fill Table type 2: DatatableJS --> Add row
    tFillTable2(){
        var tbId = "userDaiDVTestDataTableId";
        var table = $("#" + tbId);
        if (table.length > 0){
            var tableData = table.DataTable();
            var rowData = [
                `<a href="` + this.detailUrl + `">` + USER_ID_TABLE_COUNT + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.name + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.uuid + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.code + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.desc + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.image + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.name + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.name + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.name + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.updated_at + `</a>`,
                // `<a href="` + this.detailUrl + `">` + this.created_at + `</a>`,
            ];
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            for (var thId = 1; thId < tableHeaders.length; thId++){
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)){
                    rowData.push(`<a href="` + this.detailUrl + `">` + this[attr] + `</a>`);
                }
                else{
                    rowData.push(`<a href=""></a>`);
                }
            }
            tableData.row.add(rowData).draw();
            return true;
        }
        else{
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    tFillTable3(tableId=null,order=null){
        var tbId = "userDaiDVTestDataTableId";
        if(tableId!=null){
            tbId = tableId;
        }

        if(order==null){
        order=USER_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0){
            var html = "<tr>"
               html+= `<td><a>` + order + `</a></td>`;
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            var tableBody = table.find('tbody');
            //tableBody.html('');
            for (var thId = 1; thId < tableHeaders.length; thId++){
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)){

                            if(attr=="avatar"){
                                var filename="";
                                var link="";
                                if(this[attr]==undefined||this[attr]==""||this[attr]==null)
                                {
                                    filename="Không có tệp đính kèm";
                                    link="#";
                                }
                                else{
                                    var decode_url = decodeURIComponent(this[attr]);
                                    filename = decode_url.split('/')[decode_url.split('/').length-1]
                                   // filename = this[attr].split('/')[this[attr].split('/').length - 1];
                                    link=this[attr];
                                }

                                html += `
                                <td class="text-wrap">
                                    <div class="form-group row col-xl-8 table-hover mt-1" style="background-color:gainsboro;height: 25px;" id="` + this["uuid"] + `AttachmentDivId">
                                        <div class="col-xl-10 view-attachment-class text-break text-truncate" >
                                            <span><a style="color:cornflowerblue" target="_blank" title="` + filename + `" href="` + link + `"><p><b>` + filename + `</b></p></a></span>
                                        </div>
                                        <div class="col-xl-2 text-end">
                                            <i class="fas fa-times" style="color:gray" file-uuid="` + this["uuid"] + `" id="` + this["uuid"] + `btnDeleteId" onclick="avataruserDaiDVTestDeletedAttacthment(this)"></i>
                                        </div>
                                    </div>
                                </td>
                                `;
                                continue;
                            }

                        if(attr=="is_administrators"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td class="text-center">
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" id="${this["uuid"]}is_administratorsuserDaiDVTestSwitchListTablebtnId" name="`+ attr +`" data-uuid="` + this["uuid"] + `" type="checkbox"  `+value+` onclick="is_administratorsuserDaiDVTestEventChangeSwitcher(this)">
                                    <label class="custom-control-label" for="${this["uuid"]}is_administratorsuserDaiDVTestSwitchListTablebtnId"></label>
                                    </div></td>`;
                                continue;
                            }

                        if(attr=="is_deleted"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td class="text-center">
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" id="${this["uuid"]}is_deleteduserDaiDVTestSwitchListTablebtnId" name="`+ attr +`" data-uuid="` + this["uuid"] + `" type="checkbox"  `+value+` onclick="is_deleteduserDaiDVTestEventChangeSwitcher(this)">
                                    <label class="custom-control-label" for="${this["uuid"]}is_deleteduserDaiDVTestSwitchListTablebtnId"></label>
                                    </div></td>`;
                                continue;
                            }

                        if(attr=="last_login_at"){
                            html +=`<td class="text-wrap"><a>` + GetDateOnly_V01(this[attr]) + `</a></td>`;
                                continue;
                            }

                        if(attr=="created_by"){

                            var name=this[attr]["name"];
                            if (name == undefined){
                                name = "-"
                            }

                            html +=`<td class="text-wrap"><a>` + name + `</a></td>`;

                            continue;
                        }

                        if(attr=="updated_by"){

                            var name=this[attr]["name"];
                            if (name == undefined){
                                name = "-"
                            }

                            html +=`<td class="text-wrap"><a>` + name + `</a></td>`;

                            continue;
                        }

                        if(attr=="updated_at"){
                            html +=`<td class="text-wrap"><a>` + GetDateOnly_V01(this[attr]) + `</a></td>`;
                                continue;
                            }

                        if(attr=="created_at"){
                            html +=`<td class="text-wrap"><a>` + GetDateOnly_V01(this[attr]) + `</a></td>`;
                                continue;
                            }

                    if(attr=="name"){
                        html +=`<td class="text-wrap" style="min-width:300px" onclick="UserDaiDVTestDetails('`+this["uuid"]+`')"><a>` + (this[attr]) + `</a></td>`;
                            continue;
                    }
                    //html +=`<td class="text-wrap"><a>` + (this[attr]) + `</a></td>`;
                    html +=`<td class="text-wrap"><a>` + (this[attr]) + `</a></td>`;
                }

                else{
                    if(attr=="user-admin-action")
                    {
                        html +=BindActionButtonVer4(
                            UserDaiDVTest_arr_action,
                            this['uuid'],
                            this,
                            null,
                            this['created_by'],
                        );
                    }else
                    {

                        if(attr=="is_administrators"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td class="text-center">
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" id="${this["uuid"]}is_administratorsuserDaiDVTestSwitchListTablebtnId" name="`+ attr +`" data-uuid="` + this["uuid"] + `" type="checkbox"  `+value+` onclick="is_administratorsuserDaiDVTestEventChangeSwitcher(this)">
                                    <label class="custom-control-label" for="${this["uuid"]}is_administratorsuserDaiDVTestSwitchListTablebtnId"></label>
                                    </div></td>`;
                                continue;
                            }

                        if(attr=="is_deleted"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td class="text-center">
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" id="${this["uuid"]}is_deleteduserDaiDVTestSwitchListTablebtnId" name="`+ attr +`" data-uuid="` + this["uuid"] + `" type="checkbox"  `+value+` onclick="is_deleteduserDaiDVTestEventChangeSwitcher(this)">
                                    <label class="custom-control-label" for="${this["uuid"]}is_deleteduserDaiDVTestSwitchListTablebtnId"></label>
                                    </div></td>`;
                                continue;
                            }

                    html +=`<td><a href=""></a></td>`;
                    }
                }
            }

                html+='</tr>';

            tableBody.append(html);
            return true;
        }
        else{
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    // Fill List type 1:
    tFillList1(){
    }

    // Fill List type 2:
    tFillList2(){
    }

            //fill table for inline table
    tFillTable4(tableId=null,order=null,action=null){
        var tbId = "userDaiDVTestDataTableId";
        if(tableId!=null){
            tbId = tableId;
        }

        if(order==null){
        order=USER_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0){
            var html = "<tr is-new='false' status='added'>"
               html+= `<td><a href="` + this.detailUrl + `">` + order + `</a></td>`;
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            var tableBody = table.find('tbody');
            //tableBody.html('');
            for (var thId = 1; thId < tableHeaders.length; thId++){
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)){

                            if(attr=="avatar"){

                                var filename="";
                                var link="";
                                if(this[attr]==undefined||this[attr]==""||this[attr]==null)
                                {
                                    filename="Không có tệp đính kèm";
                                    link="#";
                                }
                                else{
                                    var decode_url = decodeURIComponent(this[attr]);
                                    filename = decode_url.split('/')[decode_url.split('/').length-1]
                                    link=this[attr];
                                }

                                html += `
                                <td class="text-wrap">
                                    <div class="form-group row col-xl-8 table-hover mt-1" style="background-color:gainsboro;height: 25px;" id="` + this["uuid"] + `AttachmentDivId">
                                        <div class="col-xl-10 view-attachment-class text-break text-truncate" >
                                            <span><a style="color:cornflowerblue" target="_blank" title="` + filename + `" href="` + link + `"><p><b>` + filename + `</b></p></a></span>
                                        </div>
                                        <div class="col-xl-2 text-end d-none">
                                        </div>
                                    </div>
                                </td>
                                `;
                                continue;
                            }

                        if(attr=="is_administrators"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td>
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" type="checkbox"  `+value+` disabled>
                                    <label class="custom-control-label"></label>
                                    </div></td>`;
                                continue;
                            }

                        if(attr=="is_deleted"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td>
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" type="checkbox"  `+value+` disabled>
                                    <label class="custom-control-label"></label>
                                    </div></td>`;
                                continue;
                            }

                        if(attr=="last_login_at"){
                            html +=`<td class="text-wrap"><a>` + GetDateOnly_V01(this[attr]) + `</a></td>`;
                                continue;
                            }

                        if(attr=="created_by"){

                            var name=this[attr]["name"];
                            if (name == undefined){
                                    name = "-"
                                }
                            html +=`<td class="text-wrap"><a>` + name + `</a></td>`;

                            continue;
                        }

                        if(attr=="updated_by"){

                            var name=this[attr]["name"];
                            if (name == undefined){
                                    name = "-"
                                }
                            html +=`<td class="text-wrap"><a>` + name + `</a></td>`;

                            continue;
                        }

                        if(attr=="updated_at"){
                            html +=`<td class="text-wrap"><a>` + GetDateOnly_V01(this[attr]) + `</a></td>`;
                                continue;
                            }

                        if(attr=="created_at"){
                            html +=`<td class="text-wrap"><a>` + GetDateOnly_V01(this[attr]) + `</a></td>`;
                                continue;
                            }

                    html +=`<td class="text-wrap"><a>` + (this[attr]) + `</a></td>`;
                }
                else{
                    if(attr=="user-admin-action")
                    {
                        html +=`<td class="text-center d-none">
                        <a  onclick="User`+action+`DeteleRowAddingTable(this)"> &nbsp;
                            <i title="Xóa" class="fas fa-trash" onclick="User`+action+`DeteleRowAddingTable(this)"></i>&nbsp;
                                            Xóa
                        </a></td>
                        `;

                    }else
                    {

                        if(attr=="is_administrators"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td>
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" type="checkbox"  `+value+` disabled>
                                    <label class="custom-control-label"></label>
                                    </div></td>`;
                                continue;
                            }

                        if(attr=="is_deleted"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            html +=`<td>
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" type="checkbox"  `+value+` disabled>
                                    <label class="custom-control-label"></label>
                                    </div></td>`;
                                continue;
                            }

                    html +=`<td><a href=""></a></td>`;
                    }
                }
            }

                html+='</tr>';

            tableBody.append(html);
            return true;
        }
        else{
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }



    tFillCard(cardId=null,order=null){
        var card_Id = "userDaiDVTestCardAreaId";
        if(cardId!=null){
            card_Id = cardId;
        }

        if(order==null){
        order=USER_ID_TABLE_COUNT;
        }
        var card_area = $("#" + card_Id);
        if (card_area.length > 0){
            var card_template = card_area.find(".userDaiDVTestTemplateCardClass");
            if(card_template.length > 0){
                var new_card = card_template.clone(true);
                //var html = "<tr>"
                //html+= `<td><a>` + order + `</a></td>`;
                // Get All Attribute of thead
                var cardContent = new_card.find('[tnv_card_content]');
                var tableBody = new_card.find('.card-body');
                //tableBody.html('');
                for (var thId = 0; thId < cardContent.length; thId++){
                    var hEle = cardContent[thId];
                    var attr = hEle.getAttribute('attr-name');
                    if (this.hasOwnProperty(attr)){


                            if(attr=="avatar"){
                                var filename="";
                                var link="";
                                if(this[attr]==undefined||this[attr]==""||this[attr]==null)
                                {
                                    filename="Không có tệp đính kèm";
                                    link="#";
                                }
                                else{
                                    var decode_url = decodeURIComponent(this[attr]);
                                    filename = decode_url.split('/')[decode_url.split('/').length-1]
                                   // filename = this[attr].split('/')[this[attr].split('/').length - 1];
                                    link=this[attr];
                                }

                                $(hEle).html( `
                                    <div class="form-group row col-xl-8 table-hover mt-1" style="background-color:gainsboro;height: 25px;" id="` + this["uuid"] + `AttachmentDivId">
                                        <div class="col-xl-10 view-attachment-class text-break text-truncate" >
                                            <span><a style="color:cornflowerblue" target="_blank" title="` + filename + `" href="` + link + `"><p><b>` + filename + `</b></p></a></span>
                                        </div>
                                        <div class="col-xl-2 text-end">
                                            <i class="fas fa-times" style="color:gray" file-uuid="` + this["uuid"] + `" id="` + this["uuid"] + `btnDeleteId" onclick="avataruserDaiDVTestDeletedAttacthment(this)"></i>
                                        </div>
                                    </div>
                                `);
                                continue;
                            }

                        if(attr=="is_administrators"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            $(hEle).html(`
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" type="checkbox"  `+value+` disabled>
                                    <label class="custom-control-label"></label>
                                    </div>`)
                            continue;
                            }

                        if(attr=="is_deleted"){
                            var value="";
                            if(this[attr] || this[attr]=="true"){
                                value="checked";
                            }
                            $(hEle).html(`
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" type="checkbox"  `+value+` disabled>
                                    <label class="custom-control-label"></label>
                                    </div>`)
                            continue;
                            }

                        if(attr=="last_login_at"){
                            $(hEle).html(GetDateOnly_V01(this[attr]))
                            continue;
                            }

                        if(attr=="created_by"){

                            var name=this[attr]["name"];
                            if (name == undefined){
                                name = "-"
                            }
                            $(hEle).html(name);
                            continue;
                        }

                        if(attr=="updated_by"){

                            var name=this[attr]["name"];
                            if (name == undefined){
                                name = "-"
                            }
                            $(hEle).html(name);
                            continue;
                        }

                        if(attr=="updated_at"){
                            $(hEle).html(GetDateOnly_V01(this[attr]))
                            continue;
                            }

                        if(attr=="created_at"){
                            $(hEle).html(GetDateOnly_V01(this[attr]))
                            continue;
                            }

                        if(attr=="name"){
                            $(hEle).html(`<a onclick="UserDaiDVTestDetails('`+this["uuid"]+`')">` + (this[attr]) + `</a>`);
                            continue;
                        }
                        $(hEle).html(`<a>` + (this[attr]) + `</a>`);

                    }
                }
                var action_button = BindActionButtonVer5(
                                UserDaiDVTest_arr_action,
                                this['uuid'],
                                this,
                                null,
                                this['created_by'],
                            );
                new_card.append(action_button);
                new_card.removeClass("d-none");
                return true;
            }
            else{
                console.log('Not found dataTable Id: ,', card_Id);
                return false;
            }
            }

    }
    }


class UserDaiDVTest_ListItem {
    constructor(data){
        if (data != null){
            this.id = data.id;
            this.uuid = data.uuid;
            this.name = data.name;
        }
        else{
            this.uuid = null;
            this.id = null;
            this.name = null;
        }
    }
}


var UserDaiDVTestList_CACHE = [];
// ########## Get List Class ##############
class UserDaiDVTestList {
    // ########## Init Objects ##############
    getListApi(){
        $.ajaxSetup({
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount : 0,
            retryLimit : 3,
        });
        $.ajax({
            url: UserDaiDVTest_LIST_URL,
            type: "GET",
            async: false,
            cache: false,
            timeout: 30000,

            success: function (data) {
                UserDaiDVTestList_CACHE = []
                console.log(data);
                if (data.hasOwnProperty('results')){
                    for (var i = 0; i < data.results.length; i++){
                        var x = new UserDaiDVTest_ListItem(data.results[i]);
                        UserDaiDVTestList_CACHE.push(x);
                    }
                }else{
                    for (var i = 0; i < data.length; i++){
                        var x = new UserDaiDVTest_ListItem(data[i]);
                        UserDaiDVTestList_CACHE.push(x);
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                if(is_debug){
                    $.alert({
                        title: 'Error [' + xhr.status + '] ' + thrownError ,
                        content: xhr.responseText,
                    });
                }
                return null;
            },
        });
        return UserDaiDVTestList_CACHE;
    }

}



// ########## tTest function ##############
function tTestUserDaiDVTest(type_action=null){
    var b_json = genUserDaiDVTest();
    console.log("b_json = ", b_json);
    // var d_obj = new UserDaiDVTest(b_json);
    var d_obj = new UserDaiDVTest(b_json);
    // console.log('d_obj.tCreatePostApi()...', d_obj.tCreatePostApi());
    // console.log('d_obj.tCreateNewPostFormApi()...', d_obj.tCreateNewPostFormApi());
    // console.log('d_obj.tUpdatePostApi()...', d_obj.tUpdatePostApi());
    // var d_obj = new UserDaiDVTestList();
    // console.log('d_obj.getListApi()...', d_obj.getListApi());
    console.log("d_obj = ", d_obj);
    if(type_action=='Edit'){

        d_obj.uuid=cr_uuid;
    }
    d_obj.tFillForm();
    console.log("Fill form done...");
}

// ########## tTest function ##############
function tTestInModalUserDaiDVTest(type_action){
    var form_type = type_action+"Modal";
    var b_json = genUserDaiDVTest(form_type);
    console.log("b_json = ", b_json);
    // var d_obj = new UserDaiDVTest(b_json);
    var d_obj = new UserDaiDVTest(b_json);
    // console.log('d_obj.tCreatePostApi()...', d_obj.tCreatePostApi());
    // console.log('d_obj.tCreateNewPostFormApi()...', d_obj.tCreateNewPostFormApi());
    // console.log('d_obj.tUpdatePostApi()...', d_obj.tUpdatePostApi());
    // var d_obj = new UserDaiDVTestList();
    // console.log('d_obj.getListApi()...', d_obj.getListApi());
    console.log("d_obj = ", d_obj);
    if(type_action=='Edit'){

        d_obj.uuid=null;
    }
    d_obj.tFillTestDataFormModal(type_action);
    console.log("Fill form done...");
}
$(document).ready(function(){

});



// ########## [Edit Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestEditBtnId").click(function(){

    })
});



// ########## [Search Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestQuickSearchInputId").on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            UserDaiDVTestpagination={
                current_page:1,
                total:0,
                has_next:false,
                has_prev:false
            }
            UserDaiDVTestSearchData(UserDaiDVTestpagination["current_page"],"quick");
        }
    })
    $("#userDaiDVTestQuickSearchBtnId").click(function(){
        UserDaiDVTestpagination={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
        }
        UserDaiDVTestSearchData(UserDaiDVTestpagination["current_page"],"quick");
    })
    $("#userDaiDVTestSearchBtnId").click(function(){
        UserDaiDVTestpagination={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
    }
        UserDaiDVTestSearchData(UserDaiDVTestpagination["current_page"],"filter");
    })
});



// ########## [Search Button] Clicked Handle function ##############
$(document).ready(function(){

    $("#userDaiDVTestExportExcelBtnId").click(function(){
        var is_export = true;
        if(search_log["search_func"] == "UserDaiDVTestGetDataTable"){
                UserDaiDVTestGetLargeDataTable(1,search_log["search_data"],is_export,UserDaiDVTestExportExcel);
        }
        else if(search_log["search_func"] == "UserDaiDVTestSearchData"){
                UserDaiDVTestSearchLargeData(1,search_log["search_type"],search_log["search_data"],is_export,UserDaiDVTestExportExcel);
        }

    })
});

function UserDaiDVTestExportExcel(){

    var table=$('#userDaiDVTestExportTableId');
    var count_cols = table.find("th").length;
    if(table.find("td").length>0){
        table.tableExport({
                filename: 'thông_tin_nguời_dùng_%DD%-%MM%-%YY%',
                format: 'xls',
                excludeCols: count_cols.toString(),
                onbefore: function() {
                    toastr.success('Bắt đầu xuất Excel!');
                },
                onafter: function() {
                    toastr.success('Xuất Excel thành công');
                },
        });
    }
    else{
        toastr.warning('Không có dữ liệu!');
    }
}



// ########## [Save Button] Clicked Handle function ##############

$(document).ready(function(){

                         //   var s2_created_by_ele_create = $("#created_byAccountUserDaiDVTestCreateModalInputId");
                         //   if(s2_created_by_ele_create.length > 0 ){
                         //       s2_created_by_ele_create.select2({
                         //           placeholder: "-Lựa chọn-",
                         //           allowClear: true,
                         //       });
                         //   }


                       //    var s2_created_by_ele_detail = $("#created_byAccountUserDaiDVTestDetailModalInputId");
                       //    if(s2_created_by_ele_detail.length > 0 ){
                       //        s2_created_by_ele_detail.select2({
                       //            placeholder: "-Lựa chọn-",
                       //            allowClear: true,
                       //        });
                       //    }


                        //    var s2_created_by_ele_edit = $("#created_byAccountUserDaiDVTestEditModalInputId");
                        //    if(s2_created_by_ele_edit.length > 0 ){
                        //        s2_created_by_ele_edit.select2({
                        //            placeholder: "-Lựa chọn-",
                        //            allowClear: true,
                        //        });
                        //    }


                        //    var s2_created_by_ele = $("#created_byAccountUserDaiDVTestInputId");
                        //    if(s2_created_by_ele.length > 0 ){
                        //        s2_created_by_ele.select2({
                        //            placeholder: "-Lựa chọn-",
                        //            allowClear: true,
                        //        });
                        //    }


                         //   var s2_updated_by_ele_create = $("#updated_byAccountUserDaiDVTestCreateModalInputId");
                         //   if(s2_updated_by_ele_create.length > 0 ){
                         //       s2_updated_by_ele_create.select2({
                         //           placeholder: "-Lựa chọn-",
                         //           allowClear: true,
                         //       });
                         //   }


                       //    var s2_updated_by_ele_detail = $("#updated_byAccountUserDaiDVTestDetailModalInputId");
                       //    if(s2_updated_by_ele_detail.length > 0 ){
                       //        s2_updated_by_ele_detail.select2({
                       //            placeholder: "-Lựa chọn-",
                       //            allowClear: true,
                       //        });
                       //    }


                        //    var s2_updated_by_ele_edit = $("#updated_byAccountUserDaiDVTestEditModalInputId");
                        //    if(s2_updated_by_ele_edit.length > 0 ){
                        //        s2_updated_by_ele_edit.select2({
                        //            placeholder: "-Lựa chọn-",
                        //            allowClear: true,
                        //        });
                        //    }


                        //    var s2_updated_by_ele = $("#updated_byAccountUserDaiDVTestInputId");
                        //    if(s2_updated_by_ele.length > 0 ){
                        //        s2_updated_by_ele.select2({
                        //            placeholder: "-Lựa chọn-",
                        //            allowClear: true,
                        //        });
                        //    }


});



// ########## [Save Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestCreateBtnId").click(function(){
        obj = new UserDaiDVTest();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi();
    })
});



// ########## [Save Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestUpdateBtnId").click(function(){
        obj = new UserDaiDVTest();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('userDaiDVTestEditFormId');
    })
});



// ########## [Create New Button] Clicked Handle function ##############
var is_continue_modal=false;
var is_continue_form=false;
$(document).ready(function(){
    $("#userDaiDVTestSaveAndNewBtnId").click(function(){
        is_continue_form=true;
        obj = new UserDaiDVTest();
        console.log('Save obj and create new, obj = ', obj);
        obj.tCreateNewPostFormApi();
    })
});



// ########## [Delete Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestDeleteBtnId").click(function(){
        $.confirm({
        icon: 'fa fa-smile-o',
        title: 'XÓA!',
        content: 'Bạn có chắc muốn xóa ?!',
        theme: 'modern',
        closeIcon: 'cancel',
        animation: 'scale',
        type: 'orange',
        buttons: {
            cancel: {
                text: 'Hủy',
            },
            confirm: {
                text: 'Đồng ý',
                btnClass: 'btn-blue',
                action: function() {
                    //noi dung xoa
                    obj = new UserDaiDVTest();
                    console.log('Delete obj = ', obj);
                    obj.tDeleteApi();
                }
            },

        }
    })
});
})



// ########## [Cancel Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestCancelCreateModalBtnId").click(function(){
        $(':input','#userDaiDVTestCreatemodalsId')
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
    })
    $("#userDaiDVTestCancelEditModalBtnId").click(function(){
        $(':input','#userDaiDVTestEditmodalsId')
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
    })
    $("#userDaiDVTestCancelDetailModalBtnId").click(function(){
        $(':input','#userDaiDVTestDetailmodalsId')
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
    })
});



// ########## [Cancel Button] Clicked Handle function ##############

function UserRefreshCreateModal() {
    $('#userDaiDVTestCreatemodalsId')
        .find("input[type=text],input[type=number],textarea,select")
        .val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[data-datepicker]").val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[type=checkbox], input[type=radio]").removeClass("is-invalid").removeClass("is-valid")
        .prop("checked", false)
        .end();
};



// ########## [Cancel Button] Clicked Handle function ##############

$(document).ready(function(){

$('#userDaiDVTestCreatemodalsId').on('hidden.bs.modal', function (e) {
  $(this).removeData('bs.modal');
    $(this)
        .find("input[type=text],input[type=number],textarea,select")
        .val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[data-datepicker]").val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[type=checkbox], input[type=radio]").removeClass("is-invalid").removeClass("is-valid")
        .prop("checked", false)
        .end();
    $(this).find("table").each(function() {
          var table = new userDaiDVTestcreateTnvTable($(this));
          table.refresh();
    })

})
$('#userDaiDVTestEditmodalsId').on('hidden.bs.modal', function (e) {
  $(this).removeData('bs.modal');
    $(this)
        .find("input[type=text],input[type=number],textarea,select")
        .val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[data-datepicker]").val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[type=checkbox], input[type=radio]").removeClass("is-invalid").removeClass("is-valid")
        .prop("checked", false)
        .end();
        $(this).find("table").each(function() {
          var table = new userDaiDVTesteditTnvTable($(this));
          table.refresh();
    })
})
$('#userDaiDVTestDetailmodalsId').on('hidden.bs.modal', function (e) {
  $(this).removeData('bs.modal');
    $(this)
        .find("input[type=text],input[type=number],textarea,select")
        .val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[data-datepicker]").val('').removeClass("is-invalid").removeClass("is-valid")
        .end()
        .find("input[type=checkbox], input[type=radio]").removeClass("is-invalid").removeClass("is-valid")
        .prop("checked", false)
        .end();
      $(this).find("table").each(function() {
          var table = new userDaiDVTestdetailTnvTable($(this));
          table.refresh();
        })
})
});



// ########## [Save Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestCreateModalBtnId").click(function(){
        var validate_obj = new InputValidation('userDaiDVTestCreateModalsFormId');
        if(validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new UserDaiDVTest();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi('userDaiDVTestCreateModalsFormId');
    })
});



// ########## [Save Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestUpdateModalBtnId").click(function(){
        var validate_obj = new InputValidation('userDaiDVTestEditModalsFormId');
        if(validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;

        }
        obj = new UserDaiDVTest();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('userDaiDVTestEditModalsFormId');
    })
});



// ########## [Create New Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestSaveAndNewModalBtnId").click(function(){
        obj = new UserDaiDVTest();
        console.log('Save obj and create new, obj = ', obj);
        is_continue_modal=true;

        obj.tCreateNewPostFormApi('userDaiDVTestCreateModalsFormId');

    })
});



// ########## [Get List, push options to Select] Handle Event function ##############
function LoadUserDaiDVTestList(){

if ($(".user-daidvtest-select").length > 0){
        var obj = new UserDaiDVTestList();
        UserDaiDVTestList_CACHE = obj.getListApi();
        var crr = null;
        for (l = 0; l < UserDaiDVTestList_CACHE.length; l++){
            crr = UserDaiDVTestList_CACHE[l]
            // $(this).append(new Option(crr.name, crr.id));
            $(".user-daidvtest-select").append(new Option(crr.name, crr.uuid));
        }
    }
}
$(document).ready(function(){
     LoadUserDaiDVTestList();
})



// ########## [Fill Table] Handle Event function ##############
var UserDaiDVTestpagination={
    current_page:1,
    total:0,
    has_next:false,
    has_prev:false
}
$(document).ready(function(){
    var IdTable ="userDaiDVTestTableBodyId";
    var checker = $("#" +IdTable );
    if (checker.length > 0){
        if($('#'+IdTable).is(":visible")){
            UserDaiDVTestGetDataTable(UserDaiDVTestpagination["current_page"]);
        }
    }
})
var record_in_page = 10;
var search_log = {
    search_func:"",
    search_data:"",
    search_type:"",
}
function UserDaiDVTestGetDataTable(page=1,search_data=null){
        search_log["search_func"] = "UserDaiDVTestGetDataTable";
        search_log["search_data"] = search_data;
        search_log["search_type"] = "";

        var obj = new UserDaiDVTest();
        var results = obj.tGetAllObjApi(page,search_data);
        obj.callAjax.then(function(data) {
        $("#userDaiDVTestTableBodyId").empty();
        var body = $("#userDaiDVTestDataTableId");
        //if (body.length > 0){
        //    var bodyTable = body.DataTable();
        //    bodyTable.clear();
        //}
        USER_ID_TABLE_COUNT = 1;
        if(page>1){
        USER_ID_TABLE_COUNT =1+record_in_page*page-record_in_page
        }
        for (var i = 0; i < results.length; i++){
            try{
                console.log('results[i] = ', results[i]);

                //results[i].tFillTable2();
                results[i].tFillTable3();
                results[i].tFillCard();

                USER_ID_TABLE_COUNT++;
                // results[i].tFillTable1();
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-UserDaiDVTest");
        var pagination=UserDaiDVTestpagination;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-UserDaiDVTest");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {

                    pagenation_ele.append(`<li class="page-item"><a class="page-link" onclick="UserDaiDVTestGetDataTable(1)">Đầu</a></li>`);
                    if (pagination["has_prev"] == true) {
                        pagenation_ele.append('<li class="page-item"><a class="page-link" onclick="UserDaiDVTestGetDataTable(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                    }
                    pagenation_ele.append('<li class="page-item active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                    if (pagination["has_next"] == true) {
                        pagenation_ele.append('<li class="page-item"><a class="page-link" onclick="UserDaiDVTestGetDataTable(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
                    }
                    if(pagination["total"]>0){
                        var last_page_order = 0
                        if((pagination["total"]/record_in_page)>(pagination["total"]%record_in_page))
                        {
                        last_page_order = (pagination["total"]%record_in_page) + 1;
                        }
                        else {
                        last_page_order = (pagination["total"]%record_in_page);
                        }
                    pagenation_ele.append(`<li class="page-item"><a class="page-link" onclick="UserDaiDVTestGetDataTable(`+last_page_order+`)">Cuối</a></li>`);
                    }
                }
    })
}


$(document).ready(function(){

// bỏ ngỏ => hoàn thiện sau
// tìm kiếm lại theo nội dung đã search
console.log(search_log);

});


// ########## [Fill Form] Handle Event function ##############

$(document).ready(function(){
    var checker = $("#userDaiDVTestFormId");
    if (checker.length > 0){
         cr_uuid = checker.attr('data-uuid');
        if (typeof cr_uuid !== 'undefined' && cr_uuid !== false){
            console.log('cr_uuid = ', cr_uuid);
            var obj = new UserDaiDVTest();
            obj.tGetObjApi(cr_uuid);
        }
    }
    checker = $("#userDaiDVTestDetailFormId");
    if (checker.length > 0){
         cr_uuid = checker.attr('data-uuid');
        if (typeof cr_uuid !== 'undefined' && cr_uuid !== false){
            console.log('cr_uuid = ', cr_uuid);
            var obj = new UserDaiDVTest();
            obj.tGetObjApi(cr_uuid);
        }
    }
    checker = $("#userDaiDVTestEditFormId");
    if (checker.length > 0){
         cr_uuid = checker.attr('data-uuid');
        if (typeof cr_uuid !== 'undefined' && cr_uuid !== false){
            console.log('cr_uuid = ', cr_uuid);
            var obj = new UserDaiDVTest();
            obj.tGetObjApi(cr_uuid);
        }
    }
})
var cr_uuid="";


// ########## [CKEDITOR ENABLE] function ##############

$(document).ready(function(){
   // var all_textareas = $(".ckeditor-input");
   // for (var i = 0; i < all_textareas.length; i++){
   //     var ele = all_textareas[i];
   //     var eleId = ele.getAttribute('id');
   //     var inst = CKEDITOR.replace( eleId , {});
   //     console.log('inst = ', inst);
   //     CKEDITOR.instances[eleId].on('change', function() {
   //         // console.log(this.getData());
   //         $("#" + eleId).val(this.getData());
   //     });
   // }
});



// ########## [Test Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#userDaiDVTestTestBtnId").click(function(){
        tTestUserDaiDVTest();
    })
     $("#userDaiDVTestTestEditBtnId").click(function(){
        tTestUserDaiDVTest('Edit');
    })
    $("#userDaiDVTestTestCreateModalBtnId").click(function(){
        tTestInModalUserDaiDVTest('Create');

    })
     $("#userDaiDVTestTestEditModalBtnId").click(function(){
        tTestInModalUserDaiDVTest('Edit');
    })
});



    // ########## [Fill Table bySearch] Handle Event function ##############
    function UserDaiDVTestSearchData(page=1,search_type,search_data=null){
        search_log["search_func"] = "UserDaiDVTestSearchData";
        search_log["search_type"] = search_type;
        search_log["search_data"] = search_data;
            var obj = new UserDaiDVTest();
            var results = obj.tSearchAllObjApi(page,search_data,search_type);
            obj.callAjax.then(function(data) {
            $("#userDaiDVTestTableBodyId").empty();
            var body = $("#userDaiDVTestDataTableId");
            //if (body.length > 0){
            //    var bodyTable = body.DataTable();
            //    bodyTable.clear();
            //}
            USER_ID_TABLE_COUNT = 1;
            if(page>1){
            USER_ID_TABLE_COUNT =1+record_in_page*page-record_in_page;
            }
            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    //results[i].tFillTable2();
                    results[i].tFillTable3();

                    USER_ID_TABLE_COUNT++;
                    // results[i].tFillTable1();
                }
                catch(err){
                    console.log(err);
                }
            }
            search_type = search_type.trim()
            var pagination = UserDaiDVTestpagination;
            var pagenation_ele=$(".pagination-UserDaiDVTest");
            pagenation_ele.html('');
            var page_total_ele = $(".page-total-UserDaiDVTest");
            page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);

            if (results.length > 0) {
                    pagenation_ele.append(`<li class="page-item"><a class="page-link" onclick="UserDaiDVTestSearchData(1,'`+search_type+`'`+ `,'`+search_data+`'`+ `)">Đầu</a></li>`);

                    if (pagination["has_prev"] == true) {
                        pagenation_ele.append(`<li class="page-item"><a class="page-link" onclick="UserDaiDVTestSearchData(` + (parseInt(pagination["current_page"]) - 1) +`,'`+search_type+`'`+ `,'`+search_data+`'`+ `)">` + (parseInt(pagination["current_page"]) - 1) + `</a></li>`);
                    }
                    pagenation_ele.append('<li class="page-item active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                    if (pagination["has_next"] == true) {
                        pagenation_ele.append(`<li class="page-item"><a class="page-link" onclick="UserDaiDVTestSearchData(` + (parseInt(pagination["current_page"]) + 1) +`,'`+search_type+`'`+ `,'`+search_data+`'`+ `)">` + (parseInt(pagination["current_page"]) + 1) + `</a></li>`);
                    }
                    if(pagination["total"]>0){
                        var last_page_order = 0
                        if((pagination["total"]/record_in_page)>(pagination["total"]%record_in_page))
                        {
                        last_page_order = (pagination["total"]%record_in_page) + 1;
                        }
                        else {
                        last_page_order = (pagination["total"]%record_in_page);
                        }
                    pagenation_ele.append(`<li class="page-item"><a class="page-link" onclick="UserDaiDVTestSearchData(`+last_page_order+`,'`+search_type+`'`+ `,'`+search_data+`'`+ `)">Cuối</a></li>`);
                    }
                }
                if (search_type == "quick") {
                    var crr_txt = $("#userDaiDVTestQuickSearchInputId").val();
                    highlight(crr_txt,"#userDaiDVTestTableBodyId");
                }
        })

    }



    // ########## [Fill Table bySearch] Handle Event function ##############
    function UserDaiDVTestSearchLargeData(page=1,search_type,search_data=null,is_export,ExportFunc){
            var obj = new UserDaiDVTest();
            var tbId = "userDaiDVTestExportTableId"
            var results = obj.tSearchLargeObjApi(page,search_data,search_type);
            obj.callAjax.then(function(data) {
            $("#"+tbId).find("table").empty();
            userDaiDVTest_ID_TABLE_COUNT = 1;
            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);
                    results[i].tFillTable3(tbId);
                    results[i].tFillCard();

                    userDaiDVTest_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            if(is_export){
                ExportFunc();
            }
            })

    }



    // ########## [Fill Table bySearch] Handle Event function ##############
    function UserDaiDVTestGetLargeDataTable(page=1,search_data=null,is_export,ExportFunc){
            var obj = new UserDaiDVTest();
            var tbId = "userDaiDVTestExportTableId"
            var results = obj.tGetAllObjLargeApi(page,search_data);
            obj.callAjax.then(function(data) {
            $("#"+tbId).find("table").empty();
            userDaiDVTest_ID_TABLE_COUNT = 1;
            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);
                    results[i].tFillTable3(tbId);
                    results[i].tFillCard();
                    userDaiDVTest_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }

            if(is_export){
                ExportFunc();
            }
            })

    }



    // ########## [Fill Table bySearch] Handle Event function ##############
    var USER_ID_INLINE_TABLE_COUNT;
    function UserDaiDVTestFillTableInForm(page=1,search_data=null,tableId=null,action="detail"){
            var obj = new UserDaiDVTest();
            var results = obj.tSearchLargeObjApi(page,search_data,"filter",tableId);
            obj.callAjax.then(function(data) {
                USER_ID_INLINE_TABLE_COUNT = 1;
                if(page>1){
                USER_ID_INLINE_TABLE_COUNT =1+10*page -10;
                }
                if(action=="detail"){
                    $("#"+tableId).find('tbody').empty();
                    for (var i = 0; i < results.length; i++){
                    try{
                        console.log('results[i] = ', results[i]);
                        results[i].tFillTable4(tableId,USER_ID_INLINE_TABLE_COUNT,action);
                        USER_ID_INLINE_TABLE_COUNT++;
                    }
                    catch(err){
                        console.log(err);
                    }
                    }
                }
                else if(action=="edit"){
                    var table = new userDaiDVTesteditTnvTable($("#"+tableId)[0]);
                    table.bindRows(results);
                }
            })


    }

