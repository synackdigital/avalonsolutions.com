/*! Copyright (c) 2015, Synack AB

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE. */

function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  let cloudCTALink = document.querySelectorAll('.CTA--cloud .CTA-link')[0];
  let plmCTALink = document.querySelectorAll('.CTA--plm .CTA-link')[0];

  cloudCTALink.addEventListener('mouseover', mouseEventHandler);
  cloudCTALink.addEventListener('mouseout', mouseEventHandler);
  cloudCTALink.addEventListener('click', mouseEventHandler);
  plmCTALink.addEventListener('mouseover', mouseEventHandler);
  plmCTALink.addEventListener('mouseout', mouseEventHandler);
  plmCTALink.addEventListener('click', mouseEventHandler);
});

function mouseEventHandler(event) {
  switch (event.type) {
    case 'mouseover':
      toggleBoxState('highlighted', event.currentTarget.dataset.slug);
    break;
    case 'mouseout':
      toggleBoxState('highlighted', null);
    break;
    case 'click':
      toggleBoxState('expanded', event.currentTarget.dataset.slug);
    break;
  }
}

function toggleBoxState(state, slug) {
  let box = document.querySelectorAll('.Tagline')[0];

  switch (state) {
    case 'highlighted':
      if (slug !== null) {
        let className = 'is-'+slug+'Highlighted';
        if (!hasClass(box, className)) {
          addClass(box, className);
        }
      }
      else {
        if (hasClass(box, 'is-cloudHighlighted') && !hasClass(box, 'is-cloudExpanded')) {
          removeClass(box, 'is-cloudHighlighted');
        }
        if (hasClass(box, 'is-plmHighlighted') && !hasClass(box, 'is-plmExpanded')) {
          removeClass(box, 'is-plmHighlighted');
        }
      }
    break;
    case 'expanded':
      if (slug !== null) {
        let className = 'is-'+slug+'Expanded';
        if (!hasClass(box, className)) {
          box.style.minHeight = box.offsetHeight + 'px';
          addClass(box, className);
        }
        else {
          removeClass(box, className);
        }
      }
      else {
        if (hasClass(box, 'is-cloudExpanded')) {
          removeClass(box, 'is-cloudExpanded');
        }
        if (hasClass(box, 'is-plmExpanded')) {
          removeClass(box, 'is-plmExpanded');
        }
      }
    break;
  }
}

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
