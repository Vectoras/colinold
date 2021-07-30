document.addEventListener("DOMContentLoaded", () => {
  const resources = {
    // RESOURCES
    name: "Resources",
    type: "folder",
    folders: [
      // BASIC GRAMMAR
      {
        name: "Basic Grammar",
        type: "folder",
        folders: [
          // 10 GRAMMAR LESSONS
          {
            name: "10 Grammar Lessons",
            type: "subfolder",
            folders: [],
            files: [
              {
                name: "BetterPunctuationLesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "BetterVocabularyLesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Have or OfLesson",
                extenstion: "pptx",
                type: "file",
                sample: true,
              },
              {
                name: "ImprovingSentencesLesson",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "IntroducingSentencesLesson",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "MissplellingLesson",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "ParisPunctuationLesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "ReflectionTimeLesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "SentencesRevisionLesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "ThorpeParkPunctuationLesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
            ],
          },
          // LITERACY STARTERS
          {
            name: "Literacy Starters",
            type: "subfolder",
            folders: [],
            files: [
              {
                name: "EnglishStarters",
                extenstion: "pptx",
                type: "file",
                sample: true,
              },
              {
                name: "StarterLessonsContentsList",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
            ],
          },
          // TUTOR GROUP QUIZZES
          {
            name: "Tutor Group Quizzes",
            type: "subfolder",
            folders: [],
            files: [
              {
                name: "Tutor Group Quizzes",
                extenstion: "pptx",
                type: "file",
                sample: true,
              },
            ],
          },
        ],
        files: [],
      },
      // LITERATURE NOTES
      {
        name: "Literature Notes",
        type: "folder",
        folders: [],
        files: [
          {
            name: "An Inspector Calls",
            extenstion: "pptx",
            type: "file",
            sample: true,
          },
          {
            name: "Animal Farm",
            extenstion: "pptx",
            type: "file",
            sample: true,
          },
          {
            name: "GCSEMacbethRevUnplugged",
            extenstion: "pptx",
            type: "file",
            sample: true,
          },
          {
            name: "GCSERomeo&JulietRevUnplugged",
            extenstion: "pptx",
            type: "file",
            sample: true,
          },
        ],
      },
      // POETRY
      {
        name: "Poetry",
        type: "folder",
        folders: [
          // CREATIVE POETRY LESSON POWER POINTS
          {
            name: "Creative Poetry Lesson Power Points",
            type: "subfolder",
            folders: [],
            files: [
              {
                name: "Writing a Chocolate Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: true,
              },
              {
                name: "Writing a Christmas Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Writing a City Boy Poem Lesson",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Writing a Fruit Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "riting a Noise Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Writing a Poem as Visual Text Lesson",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Writing a Poppy Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Writing a Recipe Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Writing an Acrostic Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Writing an `I Shall' Poem Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Writing Letter of Protest Lesson",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
            ],
          },
          // POETRY NOTES
          {
            name: "Poetry Notes",
            type: "subfolder",
            folders: [],
            files: [
              {
                name: "Afrika-NothingsChanged",
                extenstion: "doc",
                type: "file",
                sample: true,
              },
              {
                name: "Alvi-UnknownGirl",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Angelou-StillIRise",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Bhatt-SearchformyTongue",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Clarke-MiracleStDavidsDay",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Davidson-InRomneyMarsh",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Dharkar-Blessing",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Frost-RoadNotTaken",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Hardi-At the Border",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "Hardy-At an Inn",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-AConstableCalls",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-AnAdvancementofLearning",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-BlackBerryPicking",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-DeathofaNat",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-Digging",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-Follower",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-MidTermBreak",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-Punishment",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-Scaffolding",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-Serenades",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-ServantBoy",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-The EarlyPurges",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-The SummerofLostRachel",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-TheBarn",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Herbert-Love Bade Me Welcome",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "Hughes-HawkRoosting",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Hughes-TheWarmandtheCold",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Hughes-Tractor",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Hughes-Wind",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Hughes-WorkandPlay",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "JennyJoseph-Warning",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Keats-OdeTo AutumnNotes",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Kolatkar-AnOldWoman",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Larkin-AtGrass",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Marvell-CoyMistress",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "Morgan-Glasgow1971",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Nichols-HurricaneHitsEngland",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Okara-OnceUponaTime",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Plath-Daddy",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "Plath-Mirror",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Rosetti-The WoodSpurge",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "RSThomas-AnOldMan",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "Satyamurti-IShallPaintNailsRed",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Spender-My Parents",
                extenstion: "docx",
                type: "file",
                sample: false,
              },
              {
                name: "UAFanthorpe-MajorRoadRMarsh",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "UAFanthorpe-NotMyBestSide",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "UAFanthorpe-OldManOldMan",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
              {
                name: "Wordsworth-WestminsterBridge",
                extenstion: "doc",
                type: "file",
                sample: false,
              },
            ],
          },
          // POETRY POWER POINTS
          {
            name: "Poetry Power Points",
            type: "subfolder",
            folders: [],
            files: [
              {
                name: "Afrika-Nothing's changed",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Agard-Checking out Me History",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Agard-Checking_Out_Me_History2",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Armitage-Harmonium",
                extenstion: "pptx",
                type: "file",
                sample: true,
              },
              {
                name: "Armitage-Manhunt",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Armitage-Remains",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Dharkar-Blessing",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Dharkar-Tissue",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "DharkarBlessing2",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Donne-TheFlea",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Duffy-Hour",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Duffy-Quickdraw",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Duffy-WarPhotographer",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "EliotT.S.-JourneyoftheMagi",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Ezekiel-NightoftheScorpion",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Fenton-In Paris with You",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Hardi-At the Border",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Hardy-At an Inn",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Hardy-RuinedMaid",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Heaney-EarlyPurgesUnseen",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Hughes-Bayonet Charge",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Keats-LaBelleDame",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Levertov-What Were They Like",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "MAOliver-Don'tMentionRosie",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Nichols-Island Man",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Owen-Exposure",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Rossetti-SisterMaude",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Sassoon-BaseDetail",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Scannell-Nettles",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Shakespeare-Sonnet12",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Shelley-Ozymandias",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Shelley-Ozymandias2",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Tennyson-Charge of the light Brigade",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Thrilling-AdviceTeenageDaughter",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Turner-DailyLondonRecipe",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "UAFanthorpe-TheList",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Weir-Poppies",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Whitman-PatrollingBarnegat",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Wordsworth-Daffodils",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Wordsworth-SolitaryReaper",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
              {
                name: "Wordsworth-TheAffictionofMargaret",
                extenstion: "ppt",
                type: "file",
                sample: false,
              },
              {
                name: "Wyatt-WhosoListToHunt",
                extenstion: "pptx",
                type: "file",
                sample: false,
              },
            ],
          },
        ],
        files: [],
      },
    ],
    files: [],
  };

  const resourcesEl = document.querySelector("#teaching-resources-list main");
  resourcesEl.textContent = "";

  function generateFolder(folder) {
    const folderEl = document.createElement("div");
    folderEl.classList.add(folder.type);

    const name = document.createElement("p");
    name.textContent = folder.name;

    folderEl.appendChild(name);
    return folderEl;
  }

  function generateFile(file, address) {
    const fileEl = document.createElement("div");
    fileEl.classList.add("file");
    fileEl.classList.add(file.extenstion);

    const p = document.createElement("p");

    if (file.sample) {
      const a = document.createElement("a");
      a.href = address;
      a.title = "Free Sample";
      a.textContent = `${file.name}.${file.extenstion}`;
      p.appendChild(a);
    } else {
      p.textContent = `${file.name}.${file.extenstion}`;
    }

    fileEl.appendChild(p);
    return fileEl;
  }

  for (let l1_folder of resources.folders) {
    const l1_folder_el = generateFolder(l1_folder);
    resourcesEl.appendChild(l1_folder_el);

    for (let l2_folder of l1_folder.folders) {
      l2_folder_el = generateFolder(l2_folder);
      l1_folder_el.appendChild(l2_folder_el);

      for (let l3_file of l2_folder.files) {
        l2_folder_el.appendChild(generateFile(l3_file, `./Resources/${l1_folder.name}/${l2_folder.name}/${l3_file.name} - SAMPLE.${l3_file.extenstion}`));
      }
    }
    for (let l2_file of l1_folder.files) {
      console.log(l2_file);
      l1_folder_el.appendChild(generateFile(l2_file, `./Resources/${l1_folder.name}/${l2_file.name} - SAMPLE.${l2_file.extenstion}`));
    }
  }
  for (let l1_file of resources.files) {
    resourcesEl.appendChild(generateFile(l1_file, `./Resources/${l1_file.name} - SAMPLE.${l1_file.extenstion}`));
  }
});

window.addEventListener("load", () => {
  // folder structure (teaching resources page)
  (function () {
    if (document.querySelector("#teaching-resources-list")) {
      const resourcesList = document.querySelector("#teaching-resources-list").querySelector("main");
      const folderList = resourcesList.querySelectorAll(".folder");
      const subfolderList = resourcesList.querySelectorAll(".subfolder");

      // closing folders and subfolders + adding click events to enable opening them

      // animation function
      function startAnimation(element) {
        // element closing
        if (element.classList.contains("opened")) {
          element.style.height = window.getComputedStyle(element).getPropertyValue("height");

          // return animation duration to be used for delaying (0 would cause cleaning before height has been set)
          return 10;
          // return 0;
        }
        // element opening
        else if (element.classList.contains("closed")) {
          const children = element.children;
          let height = parseInt(window.getComputedStyle(element).getPropertyValue("height"));

          // add total height of all children
          for (let i = 1; i < children.length; i++) {
            height += parseInt(window.getComputedStyle(children[i]).getPropertyValue("height"));
          }

          // set height to element -> the change will start animation
          element.style.height = height + "px";

          // return animation duration to be used for delaying
          let delay = 1000 * parseFloat(window.getComputedStyle(element).getPropertyValue("transition-duration"));
          return delay;
        }
      }

      // cleaning function
      function cleanAfterAnimation(element) {
        element.removeAttribute("style");
      }

      // subFolders
      for (let i = 0; i < subfolderList.length; i++) {
        subfolderList[i].classList.remove("opened");
        subfolderList[i].classList.add("closed");
        subfolderList[i].firstElementChild.style.cursor = "pointer";

        subfolderList[i].firstElementChild.addEventListener("click", function (e) {
          e.stopPropagation(); // prevent toggeling parent or child folders/subfolders

          let delay = startAnimation(subfolderList[i]); // due to height having to be auto

          setTimeout(function () {
            subfolderList[i].classList.toggle("closed");
            subfolderList[i].classList.toggle("opened");
          }, delay);

          setTimeout(function () {
            cleanAfterAnimation(subfolderList[i]); // due to height having to be auto
          }, delay);
        });
      }

      // folders
      for (let i = 0; i < folderList.length; i++) {
        folderList[i].classList.remove("opened");
        folderList[i].classList.add("closed");
        folderList[i].firstElementChild.style.cursor = "pointer";

        folderList[i].firstElementChild.addEventListener("click", function (e) {
          e.stopPropagation();

          let delay = startAnimation(folderList[i]); // due to height having to be auto

          setTimeout(function () {
            folderList[i].classList.toggle("closed");
            folderList[i].classList.toggle("opened");
          }, delay);

          setTimeout(function () {
            cleanAfterAnimation(folderList[i]); // due to height having to be auto
          }, delay);
        });
      }
    }
  })();
});
