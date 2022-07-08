import { Drawer, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { NewsDataContext } from '../Contexts/NewsDataContext';
import { cats } from '../utils/maps';


const useStyle = makeStyles({
  singleCat: {
    width: '100%', 
    paddingTop: 10, 
    paddingBottom: 10, 
    // background: (cat==='national' || cat==='sports') && 'rgb(68,69,76)', 
    paddingLeft: 10, 
    borderRadius: 5,
    "&:hover": {
      cursor: 'pointer',
      background: 'rgb(68,69,76)', 
    },
    
  },
  langChange: {
    border: '1px solid rgb(128,131,145)', 
    display:'flex', 
    borderRadius: 3,
    "&:hover": {
      cursor: 'pointer'
    }
  }
})
const SlideBar = () => {
  const classes = useStyle();
  const {selectedLang, handleToggleSelectedLang, isDrawerVisible, handleToogleDrawerVisibility} = useContext(NewsDataContext);
  return (
    <div>
      <Drawer
        anchor="left"
        open={isDrawerVisible}
        onClose={handleToogleDrawerVisibility}
      >
        <div style={{background: '#313037', paddingLeft: 30, paddingRight: 30, paddingTop: 20}}>

          <div className={classes.langChange}>
            <div style={{background: selectedLang==='en' ? 'rgb(128,131,145)' : '#313037'}} onClick={handleToggleSelectedLang}>
              <Typography style={{color: (selectedLang==='en' ? '#313037' : '#fff'), paddingLeft: 18, paddingRight: 15, fontSize: 15, paddingTop: 6, paddingBottom: 6, borderRight: '1px solid rgb(128,131,145)'}}>
                English
              </Typography>
            </div>
            <div style={{background: (selectedLang==='hi' ? 'rgb(128,131,145)' : '#313037')}} onClick={handleToggleSelectedLang}>
              <Typography style={{color: (selectedLang==='hi' ? '#313037' : '#fff'), paddingLeft: 23, paddingRight: 25, fontSize: 15, paddingTop: 6, paddingBottom: 6}}>
                Hindi
              </Typography>
            </div>
          </div>


          <div style={{borderTop: '1px solid rgb(128,131,145)', marginTop: 20}}>
            <Typography style={{fontSize: 15, color: 'rgb(128,131,145)', marginTop: 3, paddingLeft: 0}}>
              Categories
            </Typography>
            <div style={{marginTop: 10, paddingBottom: 10}}>
              {
                cats.map(cat => {
                  return(
                    <div>
                      <SingleCat cat={cat} key={cat} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        
    </Drawer>
    </div>
  )
}

const SingleCat = ({cat}) => {
  const classes = useStyle();
  const {selectedCategory, handleSetSelectedCategory} = useContext(NewsDataContext);
  const handleCategoryClicked = () => {
    handleSetSelectedCategory(cat);
  }
  return(
    <div className={classes.singleCat} style={{background: selectedCategory===cat && 'rgb(68,69,76)'}} onClick={handleCategoryClicked}>
      <Typography style={{color: '#fff', fontSize: 17}}>
        {cat==='allNews' ? 'All News' : cat.slice(0,1).toUpperCase()+cat.slice(1,cat.length)}
      </Typography>
    </div>
  );
}

export default SlideBar