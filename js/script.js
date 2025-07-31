{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Wait for the document to be fully loaded\
document.addEventListener('DOMContentLoaded', function() \{\
  \
  // Initialize the AOS (Animate on Scroll) library\
  // This adds animations to elements as they appear in the viewport.\
  AOS.init(\{\
    duration: 800, // Animation duration in milliseconds\
    once: true, // Whether animation should happen only once - while scrolling down\
    offset: 100, // Offset (in px) from the original trigger point\
  \});\
\
\});}