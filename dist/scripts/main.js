'use strict';

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
  if (document.readyState !== 'loading') fn();else document.addEventListener('DOMContentLoaded', fn);
}

ready(function () {
  var cloudCTALink = document.querySelectorAll('.CTA--cloud .CTA-link')[0];
  var plmCTALink = document.querySelectorAll('.CTA--plm .CTA-link')[0];

  cloudCTALink.addEventListener('mouseover', mouseEventHandler);
  cloudCTALink.addEventListener('mouseout', mouseEventHandler);
  cloudCTALink.addEventListener('click', mouseEventHandler);
  plmCTALink.addEventListener('mouseover', mouseEventHandler);
  plmCTALink.addEventListener('mouseout', mouseEventHandler);
  plmCTALink.addEventListener('click', mouseEventHandler);
});

function mouseEventHandler(event) {
  var slug = event.currentTarget.dataset.slug;
  var box = document.querySelectorAll('.Tagline')[0];

  switch (event.type) {
    case 'mouseover':
      toggleElState(box, 'highlighted', slug);
      break;
    case 'mouseout':
      toggleElState(box, 'highlighted', slug);
      break;
    case 'click':
      toggleElState(box, 'expanded', slug);
      break;
  }
}

function toggleElState(el, state, slug) {
  var className = '';

  switch (state) {
    case 'highlighted':
      className = 'is-' + slug + 'Highlighted';
      break;
    case 'expanded':
      className = 'is-' + slug + 'Expanded';
      break;
  }

  switch (className) {
    case 'is-cloudExpanded':
      if (hasClass(el, 'is-plmExpanded')) removeClass(el, 'is-plmExpanded');
      break;
    case 'is-plmExpanded':
      if (hasClass(el, 'is-cloudExpanded')) removeClass(el, 'is-cloudExpanded');
      break;
  }

  if (!hasClass(el, className)) addClass(el, className);else removeClass(el, className);
}

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);else el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}