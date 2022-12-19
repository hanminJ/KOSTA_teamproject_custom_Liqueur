module.exports = {
    isOwner: function (request, response) {
      if (request.session.is_logined) {
        return true;
      } else {
        return false;
      }
    }
  }

  //내부의 isOwner를 통해 session의 is_loginde가 true인지 확인하여 true값 반환해줌