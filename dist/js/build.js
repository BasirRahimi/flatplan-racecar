"use strict";var currentActiveScreen=0,background=null,screenPositions=[],navItems=null,progressBar=null;function init(){document.body.classList.add("initialised");document.getElementById("copyrightYear").innerHTML=(new Date).getFullYear(),background=document.getElementById("background"),navItems=document.getElementsByClassName("nav-item"),progressBar=document.getElementById("progress");for(var e=document.getElementsByClassName("art-section"),t=0;t<e.length;t++)screenPositions.push({x:e[t].offsetLeft-2*e[t].offsetLeft,y:e[t].offsetTop-2*e[t].offsetTop});document.getElementById("artboard").addEventListener("wheel",function(e){e.preventDefault(),navigateViaScroll(e.deltaY)})}function navigateViaScroll(e){0<e&&currentActiveScreen<11?goToSection(currentActiveScreen+1):e<0&&0<currentActiveScreen&&goToSection(currentActiveScreen-1)}function goToSection(e){currentActiveScreen=e,updateScreen(),updateElements()}function updateScreen(){var e=screenPositions[currentActiveScreen];background.style.left="".concat(e.x,"px"),background.style.top="".concat(e.y,"px")}function updateElements(){for(var e,t=0;t<navItems.length;t++)navItems[t].classList.remove("active","complete");currentActiveScreen<12&&((e=navItems[currentActiveScreen])?(e.classList.add("active"),prevButton.classList.remove("disabled")):prevButton.classList.add("disabled")),currentActiveScreen<11?(progressBar.style.width="".concat(10*Math.abs(currentActiveScreen-10),"%"),nextButton.classList.remove("disabled")):nextButton.classList.add("disabled")}function progressBarTo(e){progressBar.style.width="".concat(10*Math.abs(e-10),"%")}document.addEventListener("DOMContentLoaded",function(){console.log("DomContentLoaded");var e=(screen.orientation||{}).type||screen.mozOrientation||screen.msOrientation;window.innerHeight>window.innerWidth||"portrait-secondary"===e||"portrait-primary"===e?(document.getElementById("landscapeNotice").style.display="block",document.addEventListener("orientationchange",function(){init()})):init()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjdXJyZW50QWN0aXZlU2NyZWVuIiwiYmFja2dyb3VuZCIsInNjcmVlblBvc2l0aW9ucyIsIm5hdkl0ZW1zIiwicHJvZ3Jlc3NCYXIiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2VjdGlvbnMiLCJpIiwibGVuZ3RoIiwicHVzaCIsIngiLCJvZmZzZXRMZWZ0IiwieSIsIm9mZnNldFRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmF2aWdhdGVWaWFTY3JvbGwiLCJkZWx0YVkiLCJnb1RvU2VjdGlvbiIsInNjcmVlbiIsInVwZGF0ZVNjcmVlbiIsInVwZGF0ZUVsZW1lbnRzIiwicG9zaXRpb24iLCJzdHlsZSIsImxlZnQiLCJjb25jYXQiLCJ0b3AiLCJhY3RpdmVJdGVtIiwicmVtb3ZlIiwicHJldkJ1dHRvbiIsIndpZHRoIiwiTWF0aCIsImFicyIsIm5leHRCdXR0b24iLCJwcm9ncmVzc0JhclRvIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvcmllbnRhdGlvbiIsInR5cGUiLCJtb3pPcmllbnRhdGlvbiIsIm1zT3JpZW50YXRpb24iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiYUFBQSxJQUFJQSxvQkFBc0IsRUFDdEJDLFdBQWEsS0FDYkMsZ0JBQWtCLEdBQ2xCQyxTQUFXLEtBQ1hDLFlBQWMsS0FlbEIsU0FBU0MsT0FDTEMsU0FBU0MsS0FBS0MsVUFBVUMsSUFBSSxhQUFhLEVBRTlCSCxTQUFTSSxlQUFlLGVBQWUsRUFDN0NDLFdBQVksSUFBSUMsTUFBT0MsWUFBVyxFQUV2Q1osV0FBYUssU0FBU0ksZUFBZSxZQUFZLEVBQ2pEUCxTQUFXRyxTQUFTUSx1QkFBdUIsVUFBVSxFQUNyRFYsWUFBY0UsU0FBU0ksZUFBZSxVQUFVLEVBR2hELElBUkEsSUFPSUssRUFBV1QsU0FBU1EsdUJBQXVCLGFBQWEsRUFDbkRFLEVBQUksRUFBR0EsRUFBSUQsRUFBU0UsT0FBUUQsQ0FBQyxHQUNsQ2QsZ0JBQWdCZ0IsS0FBSyxDQUNqQkMsRUFBR0osRUFBU0MsR0FBR0ksV0FBdUMsRUFBekJMLEVBQVNDLEdBQUdJLFdBQ3pDQyxFQUFHTixFQUFTQyxHQUFHTSxVQUFxQyxFQUF4QlAsRUFBU0MsR0FBR00sU0FDNUMsQ0FBQyxFQUdVaEIsU0FBU0ksZUFBZSxVQUFVLEVBQ3hDYSxpQkFBaUIsUUFBUyxTQUFDQyxHQUNoQ0EsRUFBTUMsZUFBYyxFQUVwQkMsa0JBQWtCRixFQUFNRyxNQUFNLENBQ2xDLENBQUMsQ0FDTCxDQUVBLFNBQVNELGtCQUFrQkMsR0FDVixFQUFUQSxHQUFjM0Isb0JBQXNCLEdBQ3BDNEIsWUFBWTVCLG9CQUFzQixDQUFDLEVBQzVCMkIsRUFBUyxHQUEyQixFQUF0QjNCLHFCQUNyQjRCLFlBQVk1QixvQkFBc0IsQ0FBQyxDQUUzQyxDQUVBLFNBQVM0QixZQUFZQyxHQUNqQjdCLG9CQUFzQjZCLEVBQ3RCQyxhQUFZLEVBQ1pDLGVBQWMsQ0FDbEIsQ0FFQSxTQUFTRCxlQUVMLElBQUlFLEVBQVc5QixnQkFBZ0JGLHFCQUMvQkMsV0FBV2dDLE1BQU1DLEtBQUksR0FBQUMsT0FBTUgsRUFBU2IsRUFBQyxJQUFBLEVBQ3JDbEIsV0FBV2dDLE1BQU1HLElBQUcsR0FBQUQsT0FBTUgsRUFBU1gsRUFBQyxJQUFBLENBQ3hDLENBRUEsU0FBU1UsaUJBQ0wsSUFBSyxJQU1HTSxFQU5DckIsRUFBSSxFQUFHQSxFQUFJYixTQUFTYyxPQUFRRCxDQUFDLEdBQ2xDYixTQUFTYSxHQUFHUixVQUFVOEIsT0FBTyxTQUFVLFVBQVUsRUFJakR0QyxvQkFBc0IsTUFDbEJxQyxFQUFhbEMsU0FBU0gsdUJBRXRCcUMsRUFBVzdCLFVBQVVDLElBQUksUUFBUSxFQUNqQzhCLFdBQVcvQixVQUFVOEIsT0FBTyxVQUFVLEdBRXRDQyxXQUFXL0IsVUFBVUMsSUFBSSxVQUFVLEdBR3ZDVCxvQkFBc0IsSUFDdEJJLFlBQVk2QixNQUFNTyxNQUFLLEdBQUFMLE9BQTJDLEdBQXJDTSxLQUFLQyxJQUFJMUMsb0JBQXNCLEVBQUUsRUFBTSxHQUFBLEVBQ3BFMkMsV0FBV25DLFVBQVU4QixPQUFPLFVBQVUsR0FFdENLLFdBQVduQyxVQUFVQyxJQUFJLFVBQVUsQ0FFM0MsQ0FFQSxTQUFTbUMsY0FBY0MsR0FDbkJ6QyxZQUFZNkIsTUFBTU8sTUFBSyxHQUFBTCxPQUErQixHQUF6Qk0sS0FBS0MsSUFBSUcsRUFBVSxFQUFFLEVBQU0sR0FBQSxDQUM1RCxDQXJGQXZDLFNBQVNpQixpQkFBaUIsbUJBQW9CLFdBQzFDdUIsUUFBUUMsSUFBSSxrQkFBa0IsRUFDOUIsSUFBSUMsR0FBZW5CLE9BQU9tQixhQUFlLElBQUlDLE1BQVFwQixPQUFPcUIsZ0JBQWtCckIsT0FBT3NCLGNBQ2pGQyxPQUFPQyxZQUFjRCxPQUFPRSxZQUE4Qix1QkFBaEJOLEdBQXdELHFCQUFoQkEsR0FDbEYxQyxTQUFTSSxlQUFlLGlCQUFpQixFQUFFdUIsTUFBTXNCLFFBQVUsUUFDM0RqRCxTQUFTaUIsaUJBQWlCLG9CQUFxQixXQUMzQ2xCLEtBQUksQ0FDUixDQUFDLEdBRURBLEtBQUksQ0FFWixDQUFDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGN1cnJlbnRBY3RpdmVTY3JlZW4gPSAwO1xudmFyIGJhY2tncm91bmQgPSBudWxsO1xudmFyIHNjcmVlblBvc2l0aW9ucyA9IFtdO1xudmFyIG5hdkl0ZW1zID0gbnVsbDtcbnZhciBwcm9ncmVzc0JhciA9IG51bGw7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RvbUNvbnRlbnRMb2FkZWQnKTtcbiAgICB2YXIgb3JpZW50YXRpb24gPSAoc2NyZWVuLm9yaWVudGF0aW9uIHx8IHt9KS50eXBlIHx8IHNjcmVlbi5tb3pPcmllbnRhdGlvbiB8fCBzY3JlZW4ubXNPcmllbnRhdGlvbjtcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gd2luZG93LmlubmVyV2lkdGggfHwgb3JpZW50YXRpb24gPT09ICdwb3J0cmFpdC1zZWNvbmRhcnknIHx8IG9yaWVudGF0aW9uID09PSAncG9ydHJhaXQtcHJpbWFyeScpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmRzY2FwZU5vdGljZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbml0KCk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdpbml0aWFsaXNlZCcpO1xuXG4gICAgdmFyIHllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weXJpZ2h0WWVhcicpO1xuICAgIHllYXIuaW5uZXJIVE1MID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gICAgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kJyk7XG4gICAgbmF2SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtaXRlbScpO1xuICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzJyk7XG5cbiAgICB2YXIgc2VjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhcnQtc2VjdGlvbicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2NyZWVuUG9zaXRpb25zLnB1c2goe1xuICAgICAgICAgICAgeDogc2VjdGlvbnNbaV0ub2Zmc2V0TGVmdCAtIChzZWN0aW9uc1tpXS5vZmZzZXRMZWZ0ICogMiksXG4gICAgICAgICAgICB5OiBzZWN0aW9uc1tpXS5vZmZzZXRUb3AgLSAoc2VjdGlvbnNbaV0ub2Zmc2V0VG9wICogMilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB2YXIgYXJ0Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0Ym9hcmQnKTtcbiAgICBhcnRib2FyZC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIG5hdmlnYXRlVmlhU2Nyb2xsKGV2ZW50LmRlbHRhWSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRlVmlhU2Nyb2xsKGRlbHRhWSkge1xuICAgIGlmIChkZWx0YVkgPiAwICYmIGN1cnJlbnRBY3RpdmVTY3JlZW4gPCAxMSkge1xuICAgICAgICBnb1RvU2VjdGlvbihjdXJyZW50QWN0aXZlU2NyZWVuICsgMSk7XG4gICAgfSBlbHNlIGlmIChkZWx0YVkgPCAwICYmIGN1cnJlbnRBY3RpdmVTY3JlZW4gPiAwKSB7XG4gICAgICAgIGdvVG9TZWN0aW9uKGN1cnJlbnRBY3RpdmVTY3JlZW4gLSAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdvVG9TZWN0aW9uKHNjcmVlbikge1xuICAgIGN1cnJlbnRBY3RpdmVTY3JlZW4gPSBzY3JlZW47XG4gICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgdXBkYXRlRWxlbWVudHMoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NyZWVuKCkge1xuICAgIC8vIG1vdmUgdGhlIGJhY2tncm91bmRcbiAgICB2YXIgcG9zaXRpb24gPSBzY3JlZW5Qb3NpdGlvbnNbY3VycmVudEFjdGl2ZVNjcmVlbl07XG4gICAgYmFja2dyb3VuZC5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24ueH1weGA7XG4gICAgYmFja2dyb3VuZC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi55fXB4YDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAnY29tcGxldGUnKTtcbiAgICB9XG5cbiAgICAvL2FkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIGNvcnJlY3QgbmF2IGl0ZW1cbiAgICBpZiAoY3VycmVudEFjdGl2ZVNjcmVlbiA8IDEyKSB7XG4gICAgICAgIHZhciBhY3RpdmVJdGVtID0gbmF2SXRlbXNbY3VycmVudEFjdGl2ZVNjcmVlbl07XG4gICAgICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgcHJldkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50QWN0aXZlU2NyZWVuIDwgMTEpIHtcbiAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtNYXRoLmFicyhjdXJyZW50QWN0aXZlU2NyZWVuIC0gMTApICogMTB9JWA7XG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9ncmVzc0JhclRvKHNlY3Rpb24pIHtcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke01hdGguYWJzKHNlY3Rpb24gLSAxMCkgKiAxMH0lYDtcbn0iXX0=
